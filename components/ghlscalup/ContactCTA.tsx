// components/ghlscalup/ContactCTA.tsx
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const ContactCTA = () => {
  return (
    <div className="bg-[#1C2E4A] py-16 text-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <ContactForm
                variant="dark"
                title="Book Your Free Strategy Call"
                subtitle="Fill out the form and our team will reach out within 24 hours to schedule your 30-minute consultation."
                buttonText="Schedule My Call →"
              />
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-4">
              Ready to Get Your GoHighLevel<br />
              System <span className="text-[#F8D000]">Built the Right Way?</span>
            </h2>
            <p className="text-[0.9rem] font-light text-white/50 leading-relaxed mb-6">
              Book a free 30-minute strategy call. We'll audit your setup and map out how GHL + AI automation 
              can transform your lead-to-close workflow.
            </p>
            
            {/* Benefits Section */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8D000]/20 flex items-center justify-center text-[#F8D000] text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-white">Free 30-Minute Strategy Call</h4>
                  <p className="text-sm text-white/40">No obligation, just expert advice</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8D000]/20 flex items-center justify-center text-[#F8D000] text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-white">Complete GHL Audit</h4>
                  <p className="text-sm text-white/40">Identify gaps and opportunities</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8D000]/20 flex items-center justify-center text-[#F8D000] text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-white">Custom Roadmap</h4>
                  <p className="text-sm text-white/40">Clear action plan for your business</p>
                </div>
              </div>
            </div>
            
            {/* Alternative Contact Method */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-white/40 mb-3">Prefer to email us directly?</p>
              <Link 
                href="mailto:aryan@ghlscaleup.com" 
                className="inline-flex items-center gap-2 text-[#F8D000] hover:text-[#FFE44D] transition-colors text-sm font-medium"
              >
                ✉️ aryan@ghlscaleup.com
                <span className="text-white/40">→</span>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ContactCTA