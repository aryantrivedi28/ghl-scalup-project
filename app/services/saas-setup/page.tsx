// app/services/ghl/white-label-saas/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GHL White-Label SaaS Setup Services | GHL Scale Up',
  description: 'Complete white-label SaaS setup on GoHighLevel — branded domains, snapshots, Stripe billing, sub-account provisioning. 200+ projects. Get a free consultation.',
  keywords: 'GHL white-label SaaS, GoHighLevel SaaS mode, white-label agency, SaaS setup, branded CRM platform'
};

export default function WhiteLabelSaaSPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'White-Label SaaS Setup' }]} />

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
                White-Label<br />
                <span className="text-[#F8D000]">SaaS Setup</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We configure <strong className="text-white/90 font-medium">your own white-label SaaS platform on GoHighLevel</strong> — branded domains, reusable snapshots, automated sub-account provisioning, Stripe billing, and Twilio/Mailgun integration. Launch your agency SaaS in weeks, not months.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free SaaS Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">SaaS Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">White-label — your brand only</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">$0</div>
                  <div className="text-[0.78rem] text-white/50">Upfront development cost</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">2-4w</div>
                  <div className="text-[0.78rem] text-white/50">To launch your SaaS</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">MRR</div>
                  <div className="text-[0.78rem] text-white/50">Recurring revenue from day one</div>
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
              <span className="text-[#0E9BF0]">Launch Your SaaS</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Go from agency to SaaS company. We handle the technical setup so you can focus on sales and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏷️', color: 'blue', title: 'Branded Domain & Login', description: 'Your own branded subdomain (app.yourbrand.com) or custom domain. Clients log in to a platform that looks 100% like yours — no GoHighLevel branding anywhere.' },
              { icon: '📸', color: 'green', title: 'Reusable Snapshots', description: 'Master snapshots that contain your pre-built CRM setup, funnels, automations, and templates. Deploy to new clients with one click. Scale without rebuilding.' },
              { icon: '💰', color: 'yellow', title: 'Stripe Billing Integration', description: 'Connect Stripe Connect to charge clients directly. Set up subscription plans, one-time payments, and automated invoicing. You keep 100% of revenue.' },
              { icon: '📱', color: 'blue', title: 'Twilio & Mailgun Setup', description: 'Configure Twilio for SMS and Mailgun for email deliverability. Your clients get reliable communication channels without your team managing it.' },
              { icon: '🏢', color: 'green', title: 'Automated Sub-Account Provisioning', description: 'API-based sub-account creation. When a client signs up, their sub-account is created automatically with your snapshot applied. Zero manual work.' },
              { icon: '📊', color: 'yellow', title: 'Client Dashboard & Reporting', description: 'Custom dashboard showing client usage, sub-account health, and billing status. Manage all your clients from one central location.' },
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
                Is White-Label SaaS<br />
                <span className="text-[#0E9BF0]">Right for You?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                If you're a marketing agency, consultant, or entrepreneur who wants to build recurring revenue, white-label SaaS on GoHighLevel is the fastest path. You get a complete software platform without writing a single line of code.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">White-label SaaS makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A marketing agency wanting to move from services to SaaS</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A consultant or coach with a proven system to license</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An entrepreneur wanting to launch a SaaS without developers</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Already selling services on GHL and want to scale</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Looking for predictable monthly recurring revenue</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Agency to SaaS Opportunity</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Service-based agencies are capped by time and headcount. SaaS businesses scale infinitely. With GHL white-label, you keep 100% of client revenue while GHL handles the infrastructure.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our clients typically charge $197-$997/month per client. With 50 clients, that's $10k-$50k in monthly recurring revenue — without hiring developers or building software from scratch.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">$10k+</div>
                  <div className="text-[0.78rem] text-white/50">Monthly MRR potential with 50 clients</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">0</div>
                  <div className="text-[0.78rem] text-white/50">Code required to launch your SaaS</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Ownership of your client relationships</div>
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
              Our SaaS Setup Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Launch Your<br />
              <span className="text-[#0E9BF0]">White-Label SaaS</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven process to get your SaaS platform live and generating revenue quickly.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'SaaS Strategy & Pricing', description: 'We help define your SaaS offering — what features to include, pricing tiers, and target market. We analyze competitors and identify your unique value proposition.' },
              { title: 'Snapshot & Template Creation', description: 'We build your master snapshot with all your pre-configured CRM pipelines, automations, funnels, and client templates. This becomes your deployable product.' },
              { title: 'Branding & Domain Setup', description: 'We configure your branded domain, custom login page, and white-label everything. Your platform looks 100% like your brand — no GHL logos anywhere.' },
              { title: 'Billing & Payment Integration', description: 'We set up Stripe Connect to charge clients automatically. Configure subscription plans, trials, and automated invoicing.' },
              { title: 'Deployment & Onboarding', description: 'We set up automated sub-account provisioning. When clients sign up, their account is created instantly with your snapshot applied. Ready for launch.' },
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
            Ready to Launch Your Own<br />
            <span className="text-[#F8D000]">White-Label SaaS Platform?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free SaaS consultation. We'll show you how to launch your own branded software platform, charge clients monthly, and build predictable recurring revenue.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free SaaS Consultation →
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
              <span className="text-[#0E9BF0]">White-Label SaaS</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'Do I need a GoHighLevel agency account?', a: 'Yes. You will need a GoHighLevel agency account (Unlimited plan) to white-label. We can help you set this up if you do not have one yet.' },
              { q: 'Can I charge clients whatever I want?', a: 'Yes. You set your own pricing and keep 100% of client revenue. GHL only charges you for the agency account — your clients pay you directly.' },
              { q: 'How do clients sign up?', a: 'We set up a branded signup page. Clients enter their details, pay you via Stripe, and their sub-account is created automatically. Zero manual work for you.' },
              { q: 'What can I include in my snapshot?', a: 'Everything — CRM pipelines, automation workflows, funnels, email templates, SMS sequences, calendars, and reporting dashboards. Whatever you want your clients to start with.' },
              { q: 'Can I update snapshots after launch?', a: 'Yes. You can update your master snapshot and push updates to existing clients or set them for new clients only. We help you manage version control.' },
              { q: 'How long does setup take?', a: 'Basic SaaS setup takes 2-3 weeks. More complex setups with custom branding and multiple pricing tiers take 3-4 weeks. We provide a timeline during consultation.' },
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
              Build Your SaaS Foundation<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Build the core CRM experience your clients will use. Custom pipelines, tags, and fields that become your product.', href: '/services/ghl/crm-setup' },
              { title: 'Workflow Automation', description: 'Create automation templates that your clients can deploy. Your SaaS value proposition built into workflows.', href: '/services/ghl/workflow-automation' },
              { title: 'Sales Funnel Development', description: 'Build funnels that your clients can use to generate leads. A core feature of most GHL SaaS offerings.', href: '/services/ghl/sales-funnels' },
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
        title='Stop Trading Time for Money.<br /><span class="hl-yellow">Build a SaaS That Scales.</span>'
        description="Service businesses are capped. SaaS businesses scale infinitely. Launch your own white-label SaaS platform in weeks and start building predictable recurring revenue today."
        primaryText="Book Your Free SaaS Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}