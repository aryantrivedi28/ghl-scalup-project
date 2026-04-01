// app/services/ghl/sales-funnels/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GHL Sales Funnel Development & Landing Page Builder | GHL Scale Up',
  description: 'Expert GHL sales funnel development with high-converting landing pages, opt-in forms, order bumps, and upsells. 200+ projects delivered. Get a free funnel audit today.',
  keywords: 'GoHighLevel sales funnel, GHL landing page builder, funnel development, sales funnel design, high-converting funnels'
};

export default function SalesFunnelsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'Sales Funnel Development' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GHL Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Sales Funnel<br />
                <span className="text-[#F8D000]">Development</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We build <strong className="text-white/90 font-medium">high-converting landing pages, opt-in forms, sales pages, order bumps, upsells, and thank-you pages</strong> inside GoHighLevel designed to turn traffic into paying customers.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Funnel Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Funnel Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Funnels built</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">3-5x</div>
                  <div className="text-[0.78rem] text-white/50">Average conversion improvement</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Mobile</div>
                  <div className="text-[0.78rem] text-white/50">Fully responsive design</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">24/7</div>
                  <div className="text-[0.78rem] text-white/50">Funnels convert non-stop</div>
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
              Everything You Need for<br />
              <span className="text-[#0E9BF0]">High-Converting Funnels</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Every funnel is custom-built for your offer, audience, and conversion goals. No templates. No generic designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📄', color: 'blue', title: 'Opt-In & Landing Pages', description: 'High-converting lead capture pages designed to collect emails, phone numbers, and qualification data. Mobile-optimized with clear CTAs and minimal friction.' },
              { icon: '💰', color: 'green', title: 'Sales Pages & Order Forms', description: 'Compelling sales pages with persuasive copy, social proof, and urgency elements. Integrated with Stripe for seamless payment processing.' },
              { icon: '📈', color: 'yellow', title: 'Order Bumps & Upsells', description: 'One-click upsells, downsells, and order bumps that increase average order value by 15-30% without additional ad spend.' },
              { icon: '🎯', color: 'blue', title: 'Thank You Pages & Confirmations', description: 'Post-purchase pages with next steps, content delivery, and cross-sell opportunities. Track conversions and pixel events.' },
              { icon: '🔗', color: 'green', title: 'CRM Integration', description: 'All funnel pages feed leads directly into your GoHighLevel CRM with proper tagging and pipeline assignment. No manual data entry.' },
              { icon: '📊', color: 'yellow', title: 'Analytics & Tracking', description: 'Facebook Pixel, Google Analytics, and custom event tracking to measure performance and optimize conversions over time.' },
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
                Is Sales Funnel Development<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                If you're running ads or driving traffic to a website that doesn't convert, you're burning money. A well-designed funnel turns cold traffic into leads, leads into customers, and customers into repeat buyers.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Sales funnel development makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Running Facebook, Google, or TikTok ads to a generic website</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Selling digital products, courses, coaching, or services online</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Getting traffic but not capturing leads or making sales</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Wanting to increase average order value with upsells</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Building a lead generation system for your agency or business</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of a Bad Funnel</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">A poorly designed funnel leaks leads at every stage. High bounce rates, abandoned carts, and missed upsell opportunities mean you're leaving money on the table sometimes 70% of potential revenue.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our funnels are built for conversion. Every element from headline to button color is optimized to move visitors to the next step. The result: more leads, more sales, higher average order value.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Average increase in conversion rate</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">25%</div>
                  <div className="text-[0.78rem] text-white/50">Higher average order value with upsells</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">50%</div>
                  <div className="text-[0.78rem] text-white/50">Reduction in cost per lead</div>
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
              Our Funnel Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Build Your<br />
              <span className="text-[#0E9BF0]">Sales Funnel</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven process that turns your offer into a conversion machine.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Offer & Audience Analysis', description: 'We start by understanding your offer, target audience, and conversion goals. What problem do you solve? Who is your ideal customer? Whats the path to purchase?' },
              { title: 'Funnel Architecture Design', description: 'We map out the entire funnel: landing page → opt-in → sales page → order form → upsell → thank you. Every step is designed with one goal: move visitors forward.' },
              { title: 'Copywriting & Design', description: 'Our team crafts persuasive copy and designs high-converting pages. Headlines, subheadlines, bullet points, social proof, calls-to-action all optimized for conversions.' },
              { title: 'Development & Integration', description: 'We build your funnel inside GoHighLevel with payment processing, email automation, and CRM integration. Everything connected and tested.' },
              { title: 'Testing & Optimization', description: 'We test every page, form, and button with live data. Then we optimize based on performance to maximize conversion rates before launch.' },
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
            Ready to Turn Traffic Into<br />
            <span className="text-[#F8D000]">Paying Customers?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free funnel audit. We'll review your current conversion process and show you exactly how a properly built funnel can 3x your conversion rate.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Funnel Audit →
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
              <span className="text-[#0E9BF0]">Sales Funnels</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does funnel development take?', a: 'A standard funnel (3-5 pages) takes 1-2 weeks. Complex funnels with multiple upsells, memberships, or custom integrations take 2-3 weeks. We provide a timeline before we start.' },
              { q: 'Do you provide copywriting?', a: 'Yes. We can provide full copywriting services for your funnel pages, or work with your existing copy. Our team has experience writing high-converting sales copy across multiple industries.' },
              { q: 'Can you integrate with my existing CRM?', a: 'Yes. We integrate all funnel pages with GoHighLevel (our specialty), as well as other CRMs like HubSpot, Salesforce, and ActiveCampaign if needed.' },
              { q: 'What about payment processing?', a: 'We integrate with Stripe, PayPal, and other payment processors directly inside your funnel. One-click upsells, subscriptions, and payment plans are all supported.' },
              { q: 'Will my funnel be mobile responsive?', a: 'Absolutely. All funnels we build are fully responsive and optimized for mobile devices. Over 60% of traffic is mobile, so this is non-negotiable.' },
              { q: 'Do you offer ongoing funnel management?', a: 'Yes. We offer monthly maintenance plans that include A/B testing, performance optimization, and updates to keep your funnel converting at its best.' },
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
              Related GHL Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Maximize Funnel Performance<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Capture leads from your funnel and manage them effectively with a properly configured GHL CRM system.', href: '/services/ghl/crm-setup' },
              { title: 'Workflow Automation', description: 'Automate follow-ups triggered by funnel actions lead magnets, purchases, and cart abandonment.', href: '/services/ghl/workflow-automation' },
              { title: 'Email & SMS Campaigns', description: 'Nurture leads captured through your funnel with automated email and SMS sequences.', href: '/services/ghl/email-sms-whatsapp' },
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
        title='Stop Losing Sales to a<br /><span class="hl-yellow">Low-Converting Funnel.</span>'
        description="Every visitor to your funnel is a potential customer. Our funnels convert them. Book your free audit and see how we can increase your conversion rate."
        primaryText="Book Your Free Funnel Audit →"
        primaryHref="/contact"
      />
    </>
  );
}