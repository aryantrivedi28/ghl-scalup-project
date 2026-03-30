// app/services/ghl/reporting-dashboards/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GHL Reporting & Dashboards Services | GHL Scale Up',
  description: 'Custom dashboards for leads, pipeline value, conversion rates, and team performance. 200+ projects. Get a free reporting consultation.',
  keywords: 'GHL reporting, custom dashboards, pipeline analytics, conversion tracking, team performance dashboards'
};

export default function ReportingDashboardsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'Reporting & Dashboards' }]} />

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
                Reporting &<br />
                <span className="text-[#F8D000]">Dashboards</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We build <strong className="text-white/90 font-medium">custom dashboards for leads, pipeline value, conversion rates, and team performance</strong> — so you always know exactly how your business is performing.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Reporting Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Reporting Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Real-time data visibility</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Faster decision-making</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Custom</div>
                  <div className="text-[0.78rem] text-white/50">KPIs that matter to your business</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Daily</div>
                  <div className="text-[0.78rem] text-white/50">Automated report delivery</div>
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
              Everything You Need to<br />
              <span className="text-[#0E9BF0]">See Your Business Clearly</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Stop guessing what's working. Get real-time visibility into your leads, pipeline, and team performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📊', color: 'blue', title: 'Pipeline & Deal Dashboards', description: 'Visual dashboards showing deal volume, pipeline value, stage distribution, and win rates. See exactly where your revenue is coming from and where deals are stuck.' },
              { icon: '👥', color: 'green', title: 'Lead Source Analytics', description: 'Track which marketing channels generate the most leads and highest conversion rates. Allocate budget to what works. Cut what doesn\'t.' },
              { icon: '📈', color: 'yellow', title: 'Conversion Funnel Reports', description: 'See conversion rates at every stage — from lead to qualified to booked to closed. Identify bottlenecks and optimize your sales process.' },
              { icon: '⏱️', color: 'blue', title: 'Response Time Tracking', description: 'Measure how quickly your team responds to leads. Track average response time, first reply time, and follow-up consistency.' },
              { icon: '👥', color: 'green', title: 'Team Performance Dashboards', description: 'Individual and team performance metrics — deals closed, calls made, appointments booked. Motivate your team with clear visibility.' },
              { icon: '📅', color: 'yellow', title: 'Automated Report Delivery', description: 'Schedule daily, weekly, or monthly reports delivered to your inbox. Get key metrics without logging into GHL.' },
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
                Is Reporting & Dashboards<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                If you're making decisions based on gut feeling rather than data, you're leaving money on the table. Reporting gives you the visibility to know what's working, what's not, and where to focus.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Reporting makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An agency owner who needs to track client performance</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A sales manager wanting visibility into team activity</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A business owner who needs to know where revenue comes from</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Running marketing campaigns and tracking ROI</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Presenting to investors or board members</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Guessing</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Without proper reporting, you don't know which campaigns are profitable, where deals are getting stuck, or which team members are performing. You're flying blind.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our dashboards give you real-time visibility into every part of your business. Make data-driven decisions that grow revenue and improve efficiency.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Faster decision-making with data</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">20%</div>
                  <div className="text-[0.78rem] text-white/50">Higher conversion with pipeline visibility</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">Daily</div>
                  <div className="text-[0.78rem] text-white/50">Real-time insights, not monthly reports</div>
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
              Our Reporting Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Build Your<br />
              <span className="text-[#0E9BF0]">Reporting System</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A strategic approach to building dashboards that provide actionable insights.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'KPI Definition', description: 'We identify the key performance indicators that matter to your business. What metrics drive revenue? What data will help you make better decisions?' },
              { title: 'Data Architecture', description: 'We map how data flows through your GHL account — pipelines, tags, custom fields, and events. We ensure all the data you need is being captured.' },
              { title: 'Dashboard Design', description: 'We design custom dashboards tailored to your role and needs. Executive dashboards, sales dashboards, marketing dashboards — each with relevant metrics.' },
              { title: 'Report Automation', description: 'We set up automated reports delivered on your schedule — daily, weekly, monthly. Key metrics delivered to your inbox without logging in.' },
              { title: 'Training & Handover', description: 'We train your team on how to use the dashboards, interpret the data, and make data-driven decisions. You become self-sufficient.' },
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
            Ready to See Your Business<br />
            <span className="text-[#F8D000]">With Crystal Clarity?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free reporting consultation. We'll show you how custom dashboards can give you real-time visibility into your leads, pipeline, and team performance.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Reporting Audit →
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
              <span className="text-[#0E9BF0]">Reporting & Dashboards</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What metrics can you track?', a: 'Anything in GHL. Leads by source, pipeline value, conversion rates, deal velocity, response times, team activity, appointment volume, revenue, and custom metrics. You tell us what matters, we build it.' },
              { q: 'Can I get automated reports?', a: 'Yes. We can set up daily, weekly, or monthly reports delivered to your inbox. Get key metrics without logging into GHL. Perfect for executives and managers.' },
              { q: 'Do dashboards update in real-time?', a: 'Yes. GHL dashboards reflect your data in real-time. When a lead comes in or a deal closes, your dashboard updates instantly.' },
              { q: 'Can I share dashboards with my team?', a: 'Yes. You can share dashboards with specific team members based on their role. Sales reps see their metrics, managers see team metrics, executives see company metrics.' },
              { q: 'How long does setup take?', a: 'Basic dashboards take 3-5 days. Complex reporting with custom metrics and multiple data sources takes 1-2 weeks. We provide timeline during consultation.' },
              { q: 'Do I need to clean my data first?', a: 'We can help. If your data is messy (inconsistent tags, missing fields), we can clean it up as part of the reporting setup. Clean data is essential for accurate reporting.' },
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
              Enhance Your Reporting<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Proper CRM structure ensures your data is clean and reports are accurate from day one.', href: '/services/ghl/crm-setup' },
              { title: 'Workflow Automation', description: 'Automate data capture and ensure every lead and deal is properly tagged for reporting.', href: '/services/ghl/workflow-automation' },
              { title: 'Integrations & API', description: 'Pull data from external tools into your GHL dashboards for unified reporting.', href: '/services/ghl/integrations-api' },
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
        title='Stop Flying Blind.<br /><span class="hl-yellow">Get Real-Time Visibility.</span>'
        description="Know exactly where your leads come from, where deals get stuck, and which campaigns are working. Custom dashboards give you the data you need to grow smarter."
        primaryText="Book Your Free Reporting Audit →"
        primaryHref="/contact"
      />
    </>
  );
}