// components/ghlscalup/FinalCTA.tsx
'use client';

import Link from 'next/link'
import { useState } from 'react'
import { 
  Mail, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Target, 
  MessageCircle,
  Phone,
  Sparkles
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import BookingModal from '@/components/BookingModal'

const FinalCTA = () => {
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#1C2E4A] to-[#0B1421] py-20 text-white relative overflow-hidden">

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Form */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all">
                <ContactForm
                  variant="dark"
                  title="Get Started Today"
                  subtitle="Fill out the form and our team will reach out within 24 hours to schedule your free strategy call."
                  buttonText="Book a Call →"
                  showDirectBooking={false}
                />
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div>
              
              <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4">
                Stop Struggling with GoHighLevel.
                Let Our Experts <span className="text-[#F8D000]">
                  Handle It for You.
                </span>
              </h2>
              
              <p className="text-[0.9rem] font-light text-white/50 leading-relaxed mb-8">
                Whether you need CRM setup, AI automation, sales funnels, or a complete white-label SaaS 
                our dedicated GoHighLevel team is ready to help you scale.
              </p>
              
              {/* Direct Booking Button - Instant Action */}
              <button
                onClick={handleOpenBooking}
                className="w-full mb-6 bg-gradient-to-r from-[#0E9BF0] to-[#0878C4] text-white px-6 py-3.5 rounded-xl text-sm font-bold hover:from-[#0878C4] hover:to-[#0E9BF0] hover:-translate-y-0.5 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Book Your Free Strategy Call Instantly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-white/40 mb-8">
                ⚡ Instant calendar booking • 30-min free consultation • No commitment
              </p>
              
              {/* OR Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-transparent text-xs text-white/40">OR</span>
                </div>
              </div>
              
              {/* Benefits Section */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-[#F8D000]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-[#F8D000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Free Strategy Call</h4>
                    <p className="text-sm text-white/40">30-minute consultation with our GHL expert</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-[#0E9BF0]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5 text-[#0E9BF0]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Custom Solution Design</h4>
                    <p className="text-sm text-white/40">Tailored to your business needs and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-[#25C97D]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-[#25C97D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">No Obligation Quote</h4>
                    <p className="text-sm text-white/40">Transparent pricing before we start any work</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Options */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-white/40 mb-3">📞 Prefer to talk or email?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="tel:+919893270210" 
                    className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white group"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 98932 70210
                  </Link>
                  <Link 
                    href="mailto:aryan@ghlscaleup.com" 
                    className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white group"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    aryan@ghlscaleup.com
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Booking Modal - Rendered at root level */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />
    </>
  )
}

export default FinalCTA