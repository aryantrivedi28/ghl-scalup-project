import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, DollarSign, Clock, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy | GHL Scale Up',
  description: 'GHL Scale Up refund policy for GoHighLevel setup, migration, and automation services. Understand our refund terms, eligibility criteria, and non-refundable services.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">Refund Policy</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-[#0E9BF0]" />
            <span className="text-[#0E9BF0] text-lg font-semibold uppercase tracking-wider">Refund Policy</span>
          </div>
          <h1 className="text-[clamp(38px,6vw,72px)] font-bold leading-[1.2] md:leading-[1.15] text-white mb-4 tracking-[-0.02em]">
            Refund Policy
          </h1>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-[620px]">
            Please read our refund policy carefully. It outlines the circumstances under which refunds may be provided for 
            GHL Scale Up's GoHighLevel services.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-white/40">
            <span className="flex items-center gap-1">Effective Date: May 28, 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16">
          
          {/* Main Content */}
          <main className="min-w-0">
            <div className="prose prose-slate max-w-none">
              
              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-0 mb-4">1. Service Description</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                GHL Scale Up provides professional GoHighLevel services including CRM setup, workflow automation, platform migrations, 
                AI Voice Agent configuration, white-label SaaS setup, and consulting. Each engagement is governed by a statement 
                of work or proposal that defines the specific deliverables, timeline, and fees.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">2. Deposits and Advance Payments</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Advance payments and deposits for fixed-price projects are non-refundable under any circumstances, including but 
                not limited to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Change of mind or cancellation by the client</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Delays or non-responsiveness from the client</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Issues with third-party platforms (GoHighLevel, Stripe, Twilio, etc.)</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Business closures, financial difficulties, or restructures</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Disputes over deliverables that fall within the agreed scope</li>
              </ul>
              <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
                <p className="text-sm text-[#1A2236] leading-relaxed">
                  <strong className="text-[#F8D000]">Important Definition:</strong> Work is considered begun upon signing of the 
                  scope document, granting of platform access, or commencement of strategy sessions whichever occurs first. Once 
                  work has begun, advance payments are non-refundable.
                </p>
              </div>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">3. Refund Eligibility</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Refund requests are reviewed on a case-by-case basis by GHL Scale Up. Refunds are generally not provided for 
                services that have been delivered, including but not limited to completed setups, migrations, automation builds, 
                or consulting sessions. If a project has not commenced and no work has been performed, the advance payment may 
                be refundable at our discretion. <strong className="text-[#1A2236]">We will respond to all refund requests within 7 business days.</strong>
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">4. Non-Refundable Services</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                The following services are non-refundable once delivered:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> GoHighLevel CRM and pipeline configuration</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Workflow automation builds</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Platform migrations (HubSpot, ClickFunnels, ActiveCampaign, Kajabi, etc.)</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> AI Voice Agent and Conversation AI configuration</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> White-label SaaS Mode setup</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Consulting and strategy sessions</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Snapshot creation and deployment</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Any service where the deliverable has been provided to the client</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">5. Client Delays and Non-Responsiveness</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                If a project is delayed due to client non-responsiveness, failure to provide required access or information, 
                or any other action or inaction within the client's control, the project timeline may be adjusted. No refunds 
                will be provided for delays caused by the client. If a project cannot be completed due to extended client 
                non-responsiveness (30 days or more), the advance payment is forfeited and the project may be terminated.
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">6. Recurring Services and Subscriptions</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                For ongoing services or subscription-based support, you may cancel your recurring service with 
                <strong className="text-[#1A2236]"> at least 7 days written notice before the next billing cycle</strong>. 
                No refunds or credits will be provided for partial months of service. GoHighLevel subscription fees are 
                paid directly to GoHighLevel Inc. and are non-refundable by GHL Scale Up under any circumstances.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">7. Third-Party Usage Costs</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Usage-based costs incurred through Twilio, Mailgun, Stripe, GoHighLevel, or any other third-party platform 
                during project delivery are the client's responsibility and are not refundable by GHL Scale Up. These include 
                but are not limited to SMS costs, email sending fees, API usage charges, and payment processing fees.
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">8. Chargebacks</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Filing a chargeback with your payment provider without first attempting to resolve the dispute with GHL Scale Up 
                is a breach of these terms. In the event of a chargeback, we reserve the right to suspend all services, terminate 
                any active projects, and pursue collection of the disputed amount plus any associated fees.
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">9. Project Termination</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Either party may terminate a project agreement with written notice. Upon termination, the client is responsible 
                for payment for all work completed up to the termination date. Advance payments are non-refundable for any work 
                already performed. GHL Scale Up reserves the right to terminate services immediately if a client violates these 
                terms or engages in abusive, fraudulent, or illegal conduct.
              </p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">10. GoHighLevel Subscription Disclaimer</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                GHL Scale Up's services require the client to maintain an active GoHighLevel subscription. GoHighLevel subscription 
                fees are paid directly to GoHighLevel Inc. and are non-refundable by GHL Scale Up under any circumstances. Any 
                issues with GoHighLevel's billing, subscription plans, or platform access must be addressed directly with GoHighLevel Inc.
              </p>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">11. Contact for Refund Requests</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                To request a refund or discuss a billing issue, please contact us:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Email:</strong> aryan@ghlscaleup.com</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Phone:</strong> +91 98932 70210</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">WhatsApp:</strong> +91 98932 70210</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Address:</strong> Gurgaon, Haryana, India</li>
              </ul>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                We will respond to all refund requests within <strong className="text-[#1A2236]">7 business days</strong>.
              </p>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit">
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">On This Page</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li><Link href="#section1" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">1. Service Description</Link></li>
                <li><Link href="#section2" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">2. Deposits and Advance Payments</Link></li>
                <li><Link href="#section3" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">3. Refund Eligibility</Link></li>
                <li><Link href="#section4" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">4. Non-Refundable Services</Link></li>
                <li><Link href="#section5" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">5. Client Delays</Link></li>
                <li><Link href="#section6" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">6. Recurring Services</Link></li>
                <li><Link href="#section7" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">7. Third-Party Costs</Link></li>
                <li><Link href="#section8" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">8. Chargebacks</Link></li>
                <li><Link href="#section9" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">9. Project Termination</Link></li>
                <li><Link href="#section10" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">10. GHL Subscription Disclaimer</Link></li>
                <li><Link href="#section11" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">11. Contact for Refund Requests</Link></li>
              </ul>
            </div>

            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scale Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                This Refund Policy was last updated on May 28, 2026. Please read it carefully before engaging our services.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}