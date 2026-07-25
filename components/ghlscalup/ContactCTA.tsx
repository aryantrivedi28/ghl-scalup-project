// components/ghlscalup/ContactCTA.tsx (Alternative with better modal handling)
'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Calendar, CheckCircle, ArrowRight, Phone, Clock, Target } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import BookingModal from '@/components/BookingModal'
import { Button } from '../ui/button';

const ContactCTA = () => {
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  return (
    <>
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
                  showDirectBooking={false}
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
              
              {/* Direct Booking Button - Added here for better visibility */}
              <Button
                onClick={handleOpenBooking}
                // href="/contact-us"
                className="w-full mb-6 bg-[#0E9BF0] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#0E9BF0]/90 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Book Your Free Strategy Call Instantly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-center text-white/40 mb-6">
                No form filling • Instant calendar booking • 30-min free consultation
              </p>
              
              {/* Benefits Section */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8D000]/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#F8D000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Free 30-Minute Strategy Call</h4>
                    <p className="text-sm text-white/40">No obligation, just expert advice</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8D000]/20 flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#F8D000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Complete GHL Audit</h4>
                    <p className="text-sm text-white/40">Identify gaps and opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8D000]/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#F8D000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Custom Roadmap</h4>
                    <p className="text-sm text-white/40">Clear action plan for your business</p>
                  </div>
                </div>
              </div>
              
              {/* OR Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-transparent text-xs text-white/40">OR</span>
                </div>
              </div>
              
              {/* Alternative Contact Method */}
              <div className="pt-2">
                <p className="text-sm text-white/40 mb-3">Fill out the form or email us directly:</p>
                <Link 
                  href="mailto:aryan@ghlscaleup.com" 
                  className="inline-flex items-center gap-2 text-[#F8D000] hover:text-[#FFE44D] transition-colors text-sm font-medium group"
                >
                  <Mail className="w-4 h-4" />
                  aryan@ghlscaleup.com
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick Response Time */}
              <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
                <Clock className="w-3 h-3" />
                <span>Response time: &lt; 4 hours during business hours</span>
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

export default ContactCTA