// app/services/marketing/google-ads/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'Google Ads Management Services | GHL Scale Up',
  description: 'Data-driven Google Ads management. Search, Shopping, PMax, and remarketing campaigns. 11.5x ROAS achieved. Get a free Google Ads audit.',
  keywords: 'Google Ads management, PPC management, Google Shopping, PMax campaigns, paid search'
};

export default function GoogleAdsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services', href: '/services/marketing' }, { label: 'Google Ads Management' }]} />

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
                Google Ads That Drive<br />
                <span className="text-[#F8D000]">Real Revenue</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deliver <strong className="text-white/90 font-medium">Google Ads management</strong> focused on ROI — not just clicks. Our data-driven approach maximizes your ad spend, delivering qualified leads that convert into customers.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Google Ads Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Google Ads Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">11.5x</div>
                  <div className="text-[0.78rem] text-white/50">ROAS for US electronics client</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">90%</div>
                  <div className="text-[0.78rem] text-white/50">CPA reduction achieved</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">5.44x</div>
                  <div className="text-[0.78rem] text-white/50">ROAS for ecommerce client</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">$1.17M</div>
                  <div className="text-[0.78rem] text-white/50">Revenue generated</div>
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
              Complete Google Ads Management<br />
              <span className="text-[#0E9BF0]">for Maximum ROI</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              We manage every aspect of your Google Ads campaigns — from strategy to execution to continuous optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🔍', color: 'blue', title: 'Search Campaigns', description: 'High-intent keyword targeting with strategic match types, negative keywords, and ad copy that converts. We capture customers actively searching for your products or services.' },
              { icon: '🛒', color: 'green', title: 'Shopping & PMax', description: 'Product feed optimization, Performance Max campaigns, and Shopping ads that showcase your products to ready-to-buy customers. Perfect for ecommerce.' },
              { icon: '🎯', color: 'yellow', title: 'Remarketing', description: 'Recapture visitors who didn not convert the first time. Strategic remarketing campaigns that bring potential customers back to complete their purchase.' },
              { icon: '📊', color: 'blue', title: 'Conversion Tracking', description: 'GA4, Google Tag Manager, server-side tracking, and offline conversion imports. Every click tracked through to revenue and CRM integration.' },
              { icon: '✏️', color: 'green', title: 'Ad Copy & Extensions', description: 'Compelling headlines, descriptions, and ad extensions (sitelinks, callouts, structured snippets) that increase click-through rates and quality scores.' },
              { icon: '📈', color: 'yellow', title: 'Bid Strategy Management', description: 'Smart bidding strategies — target CPA, target ROAS, maximize conversions. We optimize bids in real-time to maximize your budget efficiency.' },
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
                Is Google Ads Right for<br />
                <span className="text-[#0E9BF0]">Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Google Ads puts your business in front of customers actively searching for what you offer. Unlike other channels where you interrupt people, Google Ads captures existing demand — making it one of the highest-intent advertising channels available.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Google Ads makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An ecommerce business selling products people search for</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A service business with high-intent keywords (lawyer, plumber, realtor)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A SaaS company with solution-based keywords</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Currently running Google Ads with poor ROAS</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Looking to scale paid acquisition profitably</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Poor Google Ads Management</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Poorly managed Google Ads burn budget on irrelevant clicks. Generic ad copy gets ignored. Bad keyword targeting wastes money. No conversion tracking means you don't know what works.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our Google Ads management delivers 5-10x ROAS by targeting the right keywords, writing compelling ads, and optimizing based on conversion data — not guesses.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Higher CTR with optimized ad copy</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">40%</div>
                  <div className="text-[0.78rem] text-white/50">Lower CPA with smart bidding</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Transparent reporting on every dollar</div>
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
              Our Google Ads Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Maximize<br />
              <span className="text-[#0E9BF0]">Your Ad Spend</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A data-driven approach that optimizes every dollar for maximum ROI.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Strategy', description: 'We analyze your business, products, and goals. We identify your ideal customer, search intent, and competitive landscape. We build a campaign structure designed for your unique objectives.' },
              { title: 'Campaign Setup & Tracking', description: 'We set up campaign structure, keyword research, ad copy, and extensions. We install conversion tracking — GA4, GTM, server-side — and connect to your GHL CRM for end-to-end attribution.' },
              { title: 'Launch & Initial Optimization', description: 'We launch campaigns and monitor performance daily. We analyze search terms, add negatives, test ad copy, and adjust bids to optimize for your target CPA or ROAS.' },
              { title: 'Continuous Optimization', description: 'Weekly optimization based on performance data. We scale winning keywords, pause underperformers, test new ad copy, and refine targeting. Every decision driven by data.' },
              { title: 'Reporting & Analysis', description: 'Weekly summaries and monthly detailed reports showing spend, clicks, conversions, CPA, and ROAS. Clear insights and recommendations for next steps.' },
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
            Ready to Maximize<br />
            <span className="text-[#F8D000]">Your Google Ads ROI?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free Google Ads audit. We'll analyze your current campaigns, identify opportunities, and show you how to 3x your return on ad spend.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Google Ads Audit →
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
              <span className="text-[#0E9BF0]">Google Ads Management</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What ROAS can I expect from Google Ads?', a: 'ROAS varies by industry, competition, and offer. Our best result: 11.5x ROAS for a US electronics client. Average across clients: 3-6x. We set realistic targets based on your business metrics.' },
              { q: 'How much budget do I need to start?', a: 'Minimum recommended budget is $1,500-2,000 per month. Smaller budgets can work, but they limit testing and scaling. We help you determine the right budget for your goals.' },
              { q: 'Do you manage Shopping campaigns?', a: 'Yes. We optimize product feeds, manage Merchant Center, and run Shopping campaigns and Performance Max to showcase your products to ready-to-buy customers.' },
              { q: 'How do you track conversions?', a: 'We implement GA4, Google Tag Manager, server-side tracking, and offline conversion imports. Every click tracked through to sale. We also connect to your GHL CRM for end-to-end attribution.' },
              { q: 'How often do you optimize campaigns?', a: 'We review and optimize campaigns weekly — search terms, bids, ad copy, negatives, and budget allocation. We scale what works and cut what doesn\'t.' },
              { q: 'What reporting do you provide?', a: 'Weekly summaries and monthly detailed reports showing spend, clicks, conversions, CPA, ROAS, and recommendations. Clear insights, no fluff.' },
              { q: 'Do you build landing pages?', a: 'Yes. We can build optimized landing pages inside GHL or standalone to improve Quality Score and conversion rates. Pages designed to convert the traffic we drive.' },
              { q: 'How much does Google Ads management cost?', a: 'Management fees are typically 10-15% of ad spend, with a minimum monthly fee. We provide a custom quote based on your budget and goals during our consultation.' },
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
              Maximize Your Google Ads Results<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Conversion Rate Optimization', description: 'Optimize landing pages and checkout flows to convert more of your Google Ads traffic into customers.', href: '/services/marketing/cro' },
              { title: 'SEO Services', description: 'Combine paid and organic search strategies to dominate search results for your most valuable keywords.', href: '/services/marketing/seo' },
              { title: 'GHL CRM Setup', description: 'Connect Google Ads directly to your CRM. Track every lead from click to closed deal.', href: '/services/ghl/crm-setup' },
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
        title="Stop Burning Budget on Clicks.<br /><span class='hl-yellow'>Start Generating Revenue.</span>"
        description="Your Google Ads should drive profit, not just traffic. Book your free audit and discover how to maximize your ROAS."
        primaryText="Book Your Free Google Ads Audit →"
        primaryHref="/contact"
      />
    </>
  );
}