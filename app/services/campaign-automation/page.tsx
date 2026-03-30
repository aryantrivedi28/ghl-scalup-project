// app/services/ghl/email-sms-whatsapp/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GHL Email, SMS & WhatsApp Automation Services | GHL Scale Up',
  description: 'Multi-channel drip campaigns, nurture sequences, appointment reminders, and re-engagement workflows. 200+ projects delivered. Get a free audit.',
  keywords: 'GHL email automation, SMS marketing, WhatsApp automation, multi-channel campaigns, drip sequences'
};

export default function EmailSMSWhatsAppPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'Email, SMS & WhatsApp Automation' }]} />

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
                Email, SMS &<br />
                <span className="text-[#F8D000]">WhatsApp Automation</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We build <strong className="text-white/90 font-medium">multi-channel drip campaigns, nurture sequences, appointment reminders, and re-engagement workflows</strong> that reach your leads where they respond best.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Campaign Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Campaign Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Campaigns built</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">35%</div>
                  <div className="text-[0.78rem] text-white/50">Average open rate</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">12%</div>
                  <div className="text-[0.78rem] text-white/50">Average click-through rate</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Higher engagement with multi-channel</div>
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
              <span className="text-[#0E9BF0]">Multi-Channel Success</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Reach your audience where they are — email, SMS, or WhatsApp. We build campaigns that engage, nurture, and convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📧', color: 'blue', title: 'Email Drip Campaigns', description: 'Automated email sequences for lead nurturing, welcome series, abandoned cart recovery, and post-purchase follow-ups. Personalize content based on behavior and interests.' },
              { icon: '📱', color: 'green', title: 'SMS Marketing Flows', description: 'Short, high-converting SMS campaigns for time-sensitive offers, appointment reminders, delivery updates, and re-engagement. 98% open rate.' },
              { icon: '💬', color: 'yellow', title: 'WhatsApp Automation', description: 'Rich media messaging through WhatsApp for lead qualification, customer support, order confirmations, and interactive campaigns. Higher engagement than email.' },
              { icon: '⏰', color: 'blue', title: 'Appointment Reminders', description: 'Automated reminders via email, SMS, and WhatsApp to reduce no-shows. Confirmations, reminders, and follow-ups all automated.' },
              { icon: '🎯', color: 'green', title: 'Segmentation & Personalization', description: 'Target specific audience segments based on behavior, interests, purchase history, and engagement level. Personalized content drives higher conversion.' },
              { icon: '📊', color: 'yellow', title: 'Performance Analytics', description: 'Track open rates, click-through rates, conversion rates, and revenue per campaign. Data-driven optimization for continuous improvement.' },
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
                Is Multi-Channel Automation<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Customers expect to hear from you on their preferred channel. Email works for some, SMS for others, WhatsApp for many. With multi-channel automation, you reach everyone where they respond best.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Multi-channel automation makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Running lead generation campaigns that need follow-up</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Booking appointments and dealing with no-shows</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Wanting to nurture leads but your team is too busy</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Running e-commerce and need abandoned cart recovery</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Looking to increase customer lifetime value through email marketing</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of No Follow-Up</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">80% of leads never convert without proper follow-up. Most businesses give up after 1-2 emails. Our multi-channel campaigns continue nurturing leads across email, SMS, and WhatsApp — until they're ready to buy.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">With our automation, every lead gets a structured follow-up sequence. No one falls through the cracks. No opportunities missed.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">80%</div>
                  <div className="text-[0.78rem] text-white/50">Leads never convert without follow-up</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">98%</div>
                  <div className="text-[0.78rem] text-white/50">SMS open rate vs 20% for email</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">3-5x</div>
                  <div className="text-[0.78rem] text-white/50">Higher engagement with multi-channel</div>
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
              Our Campaign Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Build Your<br />
              <span className="text-[#0E9BF0]">Multi-Channel Campaigns</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A strategic approach to building campaigns that engage, nurture, and convert.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Audience Segmentation', description: 'We analyze your audience and create segments based on behavior, interests, and engagement. Targeted campaigns perform 3x better than broadcast blasts.' },
              { title: 'Content Strategy & Copywriting', description: 'We craft compelling messages for each channel — emails, SMS, and WhatsApp. Short and punchy for SMS, detailed for email, conversational for WhatsApp.' },
              { title: 'Workflow Building', description: 'We build your multi-channel workflows in GoHighLevel. Triggers, delays, conditional logic, and fallback paths ensure every lead gets the right message at the right time.' },
              { title: 'Integration & Testing', description: 'We connect your email, SMS, and WhatsApp channels, test deliverability, and run through every workflow scenario to ensure everything works perfectly.' },
              { title: 'Launch & Optimization', description: 'We launch your campaigns and monitor performance. Open rates, click rates, and conversion data guide ongoing optimization for maximum results.' },
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
            Ready to Engage Your Audience<br />
            <span className="text-[#F8D000]">Across Every Channel?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free campaign audit. We'll review your current follow-up process and show you how multi-channel automation can 3x your engagement.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Campaign Audit →
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
              <span className="text-[#0E9BF0]">Multi-Channel Campaigns</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What channels can you automate?', a: 'We automate email, SMS, WhatsApp, and voicemail drops — all within GoHighLevel. Each channel can be used individually or combined in multi-step sequences.' },
              { q: 'How many emails should I send?', a: 'We recommend starting with 5-7 emails in a nurture sequence. We can test and optimize based on your audience response. SMS and WhatsApp are typically 3-5 messages per sequence.' },
              { q: 'Can I use my existing email templates?', a: 'Yes. We can work with your existing templates or create new ones. We will help optimize them for deliverability and conversion.' },
              { q: 'What about deliverability?', a: 'We follow email best practices, set up proper authentication (SPF, DKIM, DMARC), and warm up sending domains to ensure your emails land in inboxes, not spam.' },
              { q: 'How long does campaign setup take?', a: 'A complete multi-channel campaign (email + SMS + WhatsApp) takes 1-2 weeks. This includes strategy, copywriting, workflow building, and testing.' },
              { q: 'Can you segment my existing list?', a: 'Yes. We can analyze your existing contacts and create segments based on engagement, purchase history, interests, and other data points for targeted campaigns.' },
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
              Supercharge Your Campaigns<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Clean, organized contact data is essential for effective segmentation and personalization.', href: '/services/ghl/crm-setup' },
              { title: 'Workflow Automation', description: 'Combine email, SMS, and WhatsApp campaigns with trigger-based workflows for even better results.', href: '/services/ghl/workflow-automation' },
              { title: 'Sales Funnel Development', description: 'Capture more leads through high-converting landing pages that feed into your campaigns.', href: '/services/ghl/sales-funnels' },
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
        title='Stop Sending One-Off Emails.<br /><span class="hl-yellow">Build a Multi-Channel Nurture System.</span>'
        description="Your leads are waiting to hear from you. Let us build automated campaigns that reach them across email, SMS, and WhatsApp — so you never miss an opportunity."
        primaryText="Book Your Free Campaign Audit →"
        primaryHref="/contact"
      />
    </>
  );
}