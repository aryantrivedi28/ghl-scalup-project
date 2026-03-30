// app/services/marketing/seo/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'SEO Services | GHL Scale Up',
  description: 'Strategic SEO services including technical SEO, on-page optimization, link building, and local SEO. Drive organic traffic that converts. Get a free SEO audit.',
  keywords: 'SEO services, technical SEO, local SEO, link building, organic traffic growth'
};

export default function SEOPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services', href: '/services/marketing' }, { label: 'SEO Services' }]} />

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
                Strategic SEO That Drives<br />
                <span className="text-[#F8D000]">Organic Revenue</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deliver <strong className="text-white/90 font-medium">search engine optimization</strong> that's connected to your growth strategy — not just rankings. Our SEO services drive qualified traffic that converts into leads and customers.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free SEO Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">SEO Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100+</div>
                  <div className="text-[0.78rem] text-white/50">Product pages optimized</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">11.5x</div>
                  <div className="text-[0.78rem] text-white/50">ROAS cross-channel</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">6</div>
                  <div className="text-[0.78rem] text-white/50">Countries served</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">5+</div>
                  <div className="text-[0.78rem] text-white/50">Years SEO experience</div>
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
              Complete SEO Solution for<br />
              <span className="text-[#0E9BF0]">Sustainable Growth</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Our SEO services cover everything from technical foundations to content optimization — all focused on driving revenue, not just rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🔍', color: 'blue', title: 'Technical SEO Audit', description: 'Comprehensive analysis of crawl errors, site speed, mobile responsiveness, schema markup, indexing issues, and duplicate content. We fix what is broken before optimizing what works.' },
              { icon: '📝', color: 'green', title: 'On-Page Optimization', description: 'Strategic optimization of titles, meta descriptions, headers, internal linking, and content structure. Every page optimized for both search engines and users.' },
              { icon: '🔗', color: 'yellow', title: 'Link Building', description: 'Strategic outreach to quality, relevant websites. We build authoritative backlinks that improve domain authority and rankings — no spam, no shortcuts.' },
              { icon: '📍', color: 'blue', title: 'Local SEO', description: 'Google Business Profile optimization, local citations, review management, and location-specific landing pages. Dominate local search results.' },
              { icon: '📊', color: 'green', title: 'Keyword Strategy', description: 'Data-driven keyword research targeting high-intent, commercial keywords. We identify opportunities your competitors are missing.' },
              { icon: '📈', color: 'yellow', title: 'Performance Reporting', description: 'Monthly reports showing rankings, organic traffic, click-through rates, and conversions. Clear ROI metrics, not vanity metrics.' },
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
                Is SEO Right for<br />
                <span className="text-[#0E9BF0]">Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                93% of online experiences begin with a search engine. If you're not ranking for the keywords your customers use, you're invisible. SEO is the most sustainable way to generate consistent, qualified traffic.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">SEO makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A business that relies on organic discovery for customers</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Paying too much for paid ads and want sustainable traffic</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A local business needing to dominate local search results</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An ecommerce business looking for product page rankings</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Tired of agencies that can't connect SEO to business results</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Poor SEO</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">If you're not on the first page of Google, you don't exist. 75% of users never scroll past the first page. Poor SEO means your competitors get the traffic, leads, and revenue that should be yours.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our SEO services get you visible, drive qualified traffic, and feed leads directly into your GHL CRM. Every click tracked, every conversion measured.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">75%</div>
                  <div className="text-[0.78rem] text-white/50">Users never go past page 1</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">93%</div>
                  <div className="text-[0.78rem] text-white/50">Online experiences start with search</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">14.6%</div>
                  <div className="text-[0.78rem] text-white/50">Average conversion rate for SEO traffic</div>
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
              Our SEO Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Drive<br />
              <span className="text-[#0E9BF0]">Organic Growth</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven, data-driven process that delivers sustainable rankings and revenue.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Audit', description: 'We analyze your current SEO health, competitor landscape, and target keywords. We identify technical issues, content gaps, and opportunities your competitors are missing.' },
              { title: 'Strategy & Roadmap', description: 'We create a custom SEO strategy with clear milestones. Technical fixes, content roadmap, link building targets, and expected timelines. You know exactly what we are doing and why.' },
              { title: 'Implementation & Optimization', description: 'We fix technical issues, optimize existing pages, create new content, and build authoritative backlinks. Every action is documented and tracked.' },
              { title: 'Monitoring & Analysis', description: 'We track rankings, traffic, and conversions daily. We analyze what is working and adjust strategy based on data — not guesses.' },
              { title: 'Reporting & Iteration', description: 'Monthly reports showing progress, wins, and next steps. Clear ROI metrics tied to your business goals. Continuous improvement cycle.' },
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
            Ready to Get Found<br />
            <span className="text-[#F8D000]">Where It Matters?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free SEO audit. We'll analyze your current search visibility, identify opportunities, and create a roadmap to organic growth.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free SEO Audit →
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
              <span className="text-[#0E9BF0]">SEO Services</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does SEO take to show results?', a: 'Typically 3-6 months for measurable improvement in rankings and traffic. Competitive keywords can take 6-12 months. We set realistic expectations and provide monthly progress reports.' },
              { q: 'Do you guarantee #1 rankings?', a: 'No ethical SEO agency guarantees specific rankings. We guarantee a proven process, transparent reporting, and continuous improvement. If someone promises #1 rankings, they are likely using black hat tactics that will eventually get you penalized.' },
              { q: 'What is a technical SEO audit?', a: 'A comprehensive analysis of crawlability, site speed, mobile responsiveness, schema markup, indexing issues, duplicate content, and internal linking structure. We identify and fix technical barriers to ranking.' },
              { q: 'Do you create content for SEO?', a: 'Yes. We create SEO-optimized blog posts, landing pages, product descriptions, and service pages. Every piece of content is keyword-targeted and designed to convert.' },
              { q: 'Can you do SEO for Shopify stores?', a: 'Absolutely. We optimize product pages, collections, blog posts, and technical elements specific to Shopify. We also handle product feed optimization for Google Shopping.' },
              { q: 'What is local SEO and do I need it?', a: 'Local SEO optimizes your business for location-based searches. If you serve customers in specific geographic areas, local SEO is essential. Includes Google Business Profile, citations, and local content.' },
              { q: 'How do you report on SEO results?', a: 'Monthly reports covering keyword rankings, organic traffic, click-through rates, conversions, and revenue. We connect SEO directly to business outcomes — not just vanity metrics.' },
              { q: 'How much does SEO cost?', a: 'Pricing varies based on scope, competition, and goals. We provide a custom quote after a free consultation. Most SEO campaigns start at $1,500-3,000/month for comprehensive services.' },
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
              Combine SEO With These<br />
              <span className="text-[#0E9BF0]">Services for Maximum Impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Content Creation & Copywriting', description: 'SEO-optimized content that ranks and converts. Blogs, landing pages, product descriptions, and service pages.', href: '/services/marketing/content-copywriting' },
              { title: 'Lead Generation Systems', description: 'Capture and convert your SEO traffic with optimized funnels, landing pages, and lead magnets.', href: '/services/marketing/lead-generation' },
              { title: 'GHL CRM Setup', description: 'Track every lead from search to sale. Connect your SEO traffic directly to your CRM for end-to-end attribution.', href: '/services/ghl/crm-setup' },
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
        title="Stop Being Invisible Online.<br /><span class='hl-yellow'>Let SEO Drive Your Growth.</span>"
        description="Your customers are searching for you — make sure they find you. Book your free SEO audit and discover how to dominate search results."
        primaryText="Book Your Free SEO Audit →"
        primaryHref="/contact"
      />
    </>
  );
}