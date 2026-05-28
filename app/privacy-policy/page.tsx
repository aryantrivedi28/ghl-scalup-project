import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Lock, Eye, Globe, Users, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | GHL Scale Up',
  description: 'GHL Scale Up privacy policy explaining how we collect, use, and protect your personal information when you use our GoHighLevel services.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
          <span className="text-[#1A2236] font-medium">Privacy Policy</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-[#0E9BF0]" />
            <span className="text-[#0E9BF0] text-sm font-semibold uppercase tracking-wider">Privacy Policy</span>
          </div>
          <h1 className="text-[clamp(32px,6vw,48px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 tracking-[-0.02em]">
            Your Privacy Matters to Us
          </h1>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-[620px]">
            This Privacy Policy explains how GHL Scale Up collects, uses, and protects your personal information 
            when you use our services. We are committed to transparency and data protection.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-white/40">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Effective Date: May 28, 2026</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Last Updated: May 28, 2026</span>
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
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-0 mb-4">1. Personal Information We Collect</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Contact us through our website forms</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Book a consultation or strategy call</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Sign up for our newsletter or free resources</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Engage our GoHighLevel setup or migration services</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Communicate with us via email, phone, or WhatsApp</li>
              </ul>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                The types of personal information we may collect include your name, email address, phone number, company name, 
                billing information, GoHighLevel account details (when providing setup or migration services), and any other 
                information you choose to provide.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> To provide and deliver our GoHighLevel services, including CRM setup, workflow automation, and migrations</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> To process payments and manage client accounts</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> To communicate with you about your project, updates, and support</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> To send you marketing communications, newsletters, and promotional offers (you may opt out at any time)</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> To improve our website, services, and client experience</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> To comply with legal obligations and enforce our terms</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us 
                understand how you interact with our site, remember your preferences, and improve our services. You can control 
                cookie settings through your browser preferences. Third-party analytics services may also use cookies to collect 
                information about your browsing activity.
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">4. Third-Party Service Providers</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                We share your information with third-party service providers who assist us in delivering our services:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">GoHighLevel</strong> — our primary platform for CRM and marketing automation (gohighlevel.com)</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Stripe</strong> — payment processing</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Twilio</strong> — SMS and communication services</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Mailgun</strong> — email delivery infrastructure</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Brevo (formerly Sendinblue)</strong> — email marketing and newsletter delivery</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">5. Data Security</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                We implement reasonable security measures to protect your personal information from unauthorized access, 
                disclosure, or misuse. However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to protect your data, we cannot guarantee absolute security.
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">6. Client Data and CRM Access</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                When we provide GoHighLevel setup, migration, or management services, we may access your GoHighLevel account 
                and any client data stored within it. We treat all client data as confidential and access it solely for the 
                purpose of delivering our services. We do not extract, retain, or use client data beyond what is necessary 
                for service delivery. You retain full ownership of all your CRM data at all times.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">7. Data Retention</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. When you are a client, we retain your information 
                for the duration of our engagement and for a reasonable period thereafter for legal and business purposes.
              </p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">8. International Users</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                GHL Scale Up operates from India. We have clients in the United States, United Kingdom, United Arab Emirates, 
                Australia, Singapore, and India. Your information may be transferred to and processed in countries other than 
                your country of residence, including India and the United States.
              </p>

              <h3 className="text-xl font-bold text-[#1C2E4A] mt-6 mb-3">GDPR Compliance (UK and EU Users)</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                If you are a resident of the United Kingdom or European Union, you have the following rights under the 
                General Data Protection Regulation (GDPR):
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Right to access</strong> — request a copy of your personal data</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Right to rectification</strong> — correct inaccurate or incomplete data</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Right to erasure (Right to be forgotten)</strong> — request deletion of your data</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Right to restrict processing</strong> — limit how we use your data</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Right to data portability</strong> — receive your data in a structured format</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Right to object</strong> — object to processing based on legitimate interests</li>
              </ul>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Our lawful basis for processing your personal data includes contract fulfillment (to provide our services), 
                legitimate business interests (to improve our services and communicate with clients), and consent (for marketing 
                communications). We will respond to all data subject access requests within 30 days.
              </p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">9. Your Rights and Choices</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Access and receive a copy of your personal information</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Correct inaccurate or incomplete information</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Request deletion of your personal information</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Object to or restrict certain processing activities</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                To exercise any of these rights, please contact us using the information in the Contact section. 
                <strong className="text-[#1A2236]"> We will respond to data requests within 30 days.</strong>
              </p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">10. Children's Privacy</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you believe a child has provided us with personal information, please contact us and we will 
                take steps to delete such information.
              </p>

              {/* WhatsApp Communication */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">11. WhatsApp Communication</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                We communicate with clients and prospects via WhatsApp. Messages sent through WhatsApp are processed by Meta 
                (formerly Facebook) and are subject to Meta's privacy policy. We encourage you to review WhatsApp's privacy 
                practices before using the platform to communicate with us.
              </p>

              {/* Section 12 */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
                the updated policy on this page with a new effective date. We encourage you to review this Privacy Policy 
                periodically for any changes.
              </p>

              {/* Contact Section */}
              <h2 className="text-2xl font-bold text-[#1C2E4A] mt-8 mb-4">13. Contact Us</h2>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, 
                please contact us:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Email:</strong> aryan@ghlscaleup.com</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Phone:</strong> +91 98932 70210</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">WhatsApp:</strong> +91 98932 70210</li>
                <li className="text-sm text-[#5C6880] flex items-start gap-2"><span className="text-[#0E9BF0]">•</span> <strong className="text-[#1A2236]">Address:</strong> Gurgaon, Haryana, India</li>
              </ul>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit">
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">On This Page</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li><Link href="#section1" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">1. Personal Information</Link></li>
                <li><Link href="#section2" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">2. How We Use Your Information</Link></li>
                <li><Link href="#section3" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">3. Cookies and Tracking</Link></li>
                <li><Link href="#section4" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">4. Third-Party Providers</Link></li>
                <li><Link href="#section5" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">5. Data Security</Link></li>
                <li><Link href="#section6" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">6. Client Data and CRM Access</Link></li>
                <li><Link href="#section7" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">7. Data Retention</Link></li>
                <li><Link href="#section8" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">8. International Users & GDPR</Link></li>
                <li><Link href="#section9" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">9. Your Rights</Link></li>
                <li><Link href="#section10" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">10. Children's Privacy</Link></li>
                <li><Link href="#section11" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">11. WhatsApp Communication</Link></li>
                <li><Link href="#section12" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">12. Changes to Policy</Link></li>
                <li><Link href="#section13" className="text-[#5C6880] hover:text-[#0E9BF0] transition-colors">13. Contact Us</Link></li>
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
                This Privacy Policy was last updated on May 28, 2026. We are committed to protecting your data and privacy.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}