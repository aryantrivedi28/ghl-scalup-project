import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Scale, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | GHL Scale Up',
  description: 'GHL Scale Up terms of service governing the use of our GoHighLevel setup, migration, and automation services. Read our service terms, client responsibilities, and legal policies.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">Terms of Service</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-8 h-8 text-[#0E9BF0]" />
            <span className="text-[#0E9BF0] text-sm font-semibold uppercase tracking-wider">Terms of Service</span>
          </div>
          <h1 className="text-[clamp(32px,6vw,48px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 tracking-[-0.02em]">
            Terms of Service
          </h1>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-[620px]">
            These Terms of Service govern your use of GHL Scale Up's GoHighLevel services, including CRM setup, 
            workflow automation, migrations, and consulting.
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
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-0 mb-4">1. Our Services</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                GHL Scale Up provides professional GoHighLevel setup, configuration, migration, automation, and consulting services, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> GoHighLevel CRM setup and pipeline configuration</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Workflow automation design and implementation</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Migration from other platforms (HubSpot, ClickFunnels, ActiveCampaign, Kajabi, and more)</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> AI Voice Agent and Conversation AI configuration</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> White-label SaaS Mode setup</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Ongoing support and consulting</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">2. Client Responsibilities</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Provide accurate and complete information required for service delivery</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Maintain an active GoHighLevel subscription through GoHighLevel Inc.</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Grant reasonable access to your GoHighLevel account for setup and migration purposes</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Respond to communications and requests within reasonable timeframes</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Comply with all applicable laws and regulations in your use of our services</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">3. Payment Terms</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Project fees are outlined in your engagement proposal or statement of work. Payment terms are specified in your agreement. 
                For fixed-price projects, an advance payment may be required before work commences. For ongoing services, recurring fees 
                are billed in advance. All fees are non-refundable except as explicitly stated in our Refund Policy.
              </p>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                GoHighLevel subscription fees are paid directly to GoHighLevel Inc. and are non-refundable by GHL Scale Up under any circumstances.
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Upon full payment, you own all custom deliverables created specifically for your project, including configured workflows, 
                CRM pipelines, and funnel structures. However, GHL Scale Up retains ownership of its proprietary frameworks, templates, 
                Snapshot systems, and pre-built automation sequences. These may be reused for other clients. Any intellectual property 
                you provide to us remains your property.
              </p>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">5. Third-Party Platforms</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Our services are delivered primarily through GoHighLevel, a third-party platform. We are not responsible for:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> GoHighLevel platform outages, downtime, or service interruptions</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> GoHighLevel API changes that may affect custom integrations</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> GoHighLevel account suspensions, terminations, or policy changes</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Issues arising from third-party integrations (Stripe, Twilio, Mailgun, etc.)</li>
              </ul>
              <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
                <p className="text-sm text-[#1A2236] leading-relaxed">
                  <strong className="text-[#0E9BF0]">Important Disclosure:</strong> GHL Scale Up is an independent service provider and is 
                  not affiliated with, endorsed by, or officially partnered with GoHighLevel Inc. GoHighLevel is a registered trademark 
                  of GoHighLevel Inc.
                </p>
              </div>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                Usage-based costs incurred through Twilio, Mailgun, Stripe, or any other third-party platform during project delivery 
                are the client's responsibility and are not refundable by GHL Scale Up.
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">6. No Guaranteed Results</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                GHL Scale Up makes no guarantees regarding specific outcomes from using our services, including but not limited to 
                lead generation, conversion rates, revenue growth, or return on investment. The effectiveness of GoHighLevel systems 
                depends on many factors outside our control, including market conditions, client execution, and platform changes.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                To the maximum extent permitted by law, GHL Scale Up's total liability for any claim arising from our services 
                shall not exceed the total fees paid by you to us in the six months preceding the claim. We are not liable for 
                indirect, incidental, or consequential damages, including lost profits, data loss, or business interruption.
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">8. Confidentiality</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Both parties agree to keep confidential any proprietary or sensitive information disclosed during the engagement. 
                This includes client data, GoHighLevel account credentials, business processes, and proprietary methodologies. 
                This confidentiality obligation survives termination of our agreement.
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">9. Termination</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Either party may terminate this agreement with <strong className="text-[#1A2236]">14 days written notice via email</strong>. 
                Upon termination, you will be billed for any work completed up to the termination date. Outstanding invoices remain due 
                and payable. We reserve the right to suspend services if payments are delinquent.
              </p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">10. Revisions Policy</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Each fixed-price project includes up to <strong className="text-[#1A2236]">two rounds of revisions</strong> within the 
                agreed scope. Additional revisions beyond this limit will be billed separately at an agreed hourly or fixed rate. 
                Revisions must be requested within 14 days of project delivery.
              </p>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">11. Governing Law</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                These Terms of Service are governed by the laws of India, without regard to conflict of law principles. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in 
                <strong className="text-[#1A2236]"> Gurgaon, Haryana, India</strong>.
              </p>

              {/* Section 12 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">12. Changes to These Terms</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                We may modify these Terms of Service at any time. Changes become effective when posted on this page. Your continued 
                use of our services after changes constitutes acceptance of the updated terms. Material changes will be communicated 
                via email when reasonably possible.
              </p>

              {/* Contact Section */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">13. Contact Information</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Email:</strong> aryan@ghlscaleup.com</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Phone:</strong> +91 98932 70210</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Address:</strong> Gurgaon, Haryana, India</li>
              </ul>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit">
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">On This Page</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li><Link href="#section1" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">1. Our Services</Link></li>
                <li><Link href="#section2" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">2. Client Responsibilities</Link></li>
                <li><Link href="#section3" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">3. Payment Terms</Link></li>
                <li><Link href="#section4" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">4. Intellectual Property</Link></li>
                <li><Link href="#section5" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">5. Third-Party Platforms</Link></li>
                <li><Link href="#section6" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">6. No Guaranteed Results</Link></li>
                <li><Link href="#section7" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">7. Limitation of Liability</Link></li>
                <li><Link href="#section8" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">8. Confidentiality</Link></li>
                <li><Link href="#section9" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">9. Termination</Link></li>
                <li><Link href="#section10" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">10. Revisions Policy</Link></li>
                <li><Link href="#section11" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">11. Governing Law</Link></li>
                <li><Link href="#section12" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">12. Changes to Terms</Link></li>
                <li><Link href="#section13" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">13. Contact Information</Link></li>
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
                These Terms of Service were last updated on May 28, 2026. Please read them carefully before engaging our services.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}