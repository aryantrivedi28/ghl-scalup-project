// components/ghlscalup/FinalCTA.tsx
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const FinalCTA = () => {
  return (
    <div className="bg-[#1C2E4A] py-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <ContactForm
                variant="dark"
                title="Get Started Today"
                subtitle="Fill out the form and our team will reach out within 24 hours to schedule your free strategy call."
                buttonText="Book a call →"
              />
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-4">
              Stop Struggling with GoHighLevel.<br />
              Let Our Experts <span className="text-[#F8D000]">Handle It for You.</span>
            </h2>
            <p className="text-[0.9rem] font-light text-white/50 leading-relaxed mb-6">
              Whether you need CRM setup, AI automation, sales funnels, or a complete white-label SaaS — 
              our dedicated GoHighLevel team is ready.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8D000]/20 flex items-center justify-center text-[#F8D000] text-lg">✓</div>
                <div>
                  <h4 className="font-semibold text-white">Free Strategy Call</h4>
                  <p className="text-sm text-white/40">30-minute consultation with our expert</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8D000]/20 flex items-center justify-center text-[#F8D000] text-lg">✓</div>
                <div>
                  <h4 className="font-semibold text-white">Custom Solution Design</h4>
                  <p className="text-sm text-white/40">Tailored to your business needs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8D000]/20 flex items-center justify-center text-[#F8D000] text-lg">✓</div>
                <div>
                  <h4 className="font-semibold text-white">No Obligation Quote</h4>
                  <p className="text-sm text-white/40">Transparent pricing before we start</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FinalCTA