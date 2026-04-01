// app/contact/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Contact GHL Scale Up — Book a Free GoHighLevel Strategy Call',
  description: 'Get in touch. Book a free 30-minute strategy call or email us. Based in Indore, India — serving 6 countries.'
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />
      
      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white" style={{ paddingTop: '60px' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                  <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                  Get in Touch
                </div>
                <h1 className="text-[clamp(2rem,4vw,2.6rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-[#1C2E4A]">
                  Let's Talk About Your<br />
                  <span className="text-[#0E9BF0]">GHL Project</span>
                </h1>
                <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-6">
                  Book a free 30-minute strategy call. We learn your business, review your setup, 
                  identify gaps, and outline a clear plan. No pitch — just a technical conversation.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-5 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-base flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-bold text-[#8A9BB0] uppercase tracking-[0.1em] mb-0.5">
                      Email
                    </div>
                    <Link 
                      href="mailto:aryan@ghlscaleup.com" 
                      className="text-[0.95rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors"
                    >
                      aryan@ghlscaleup.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(37,201,125,0.1)] flex items-center justify-center text-base flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-bold text-[#8A9BB0] uppercase tracking-[0.1em] mb-0.5">
                      Phone
                    </div>
                    <Link 
                      href="tel:+919893270210" 
                      className="text-[0.95rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors"
                    >
                      +91 98932 70210
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(248,208,0,0.12)] flex items-center justify-center text-base flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-bold text-[#8A9BB0] uppercase tracking-[0.1em] mb-0.5">
                      Location
                    </div>
                    <span className="text-[0.95rem] font-semibold text-[#1C2E4A]">
                      Gurgoan, India (Remote-first)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social/Trust Indicators */}
              <div className="pt-8 border-t border-[#E8EDF4]">
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8D000] flex items-center justify-center text-xs font-bold text-[#0B1421]">✓</div>
                    <span className="text-[0.78rem] text-[#4A5568]">200+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8D000] flex items-center justify-center text-xs font-bold text-[#0B1421]">✓</div>
                    <span className="text-[0.78rem] text-[#4A5568]">50+ Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8D000] flex items-center justify-center text-xs font-bold text-[#0B1421]">✓</div>
                    <span className="text-[0.78rem] text-[#4A5568]">6 Countries</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 md:p-10">
              <h3 className="text-[1.1rem] font-bold text-[#1C2E4A] mb-2">
                Book a Free Strategy Call
              </h3>
              <p className="text-[0.84rem] font-light text-[#4A5568] leading-relaxed mb-6">
                Fill in the details and we will schedule a 30-minute call.
              </p>
              
              <form className="flex flex-col gap-3.5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white font-['Poppins',sans-serif] text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white font-['Poppins',sans-serif] text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white font-['Poppins',sans-serif] text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white font-['Poppins',sans-serif] text-[0.85rem] text-[#4A5568] focus:outline-none focus:border-[#0E9BF0] transition-colors cursor-pointer">
                  <option>What do you need?</option>
                  <option>GHL CRM Setup</option>
                  <option>Automation</option>
                  <option>Sales Funnels</option>
                  <option>AI Chatbot / Voice</option>
                  <option>White-Label SaaS</option>
                  <option>Marketing</option>
                  <option>Shopify / Ecommerce</option>
                  <option>Other</option>
                </select>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white font-['Poppins',sans-serif] text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors resize-vertical"
                />
                <button 
                  type="submit"
                  className="bg-[#F8D000] text-[#0B1421] px-6 py-3.5 rounded-[10px] text-[0.88rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all flex items-center justify-center gap-2"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Map/Office Hours Section */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Office Hours
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2rem]] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A]">
                We're Here to Help<br />
                <span className="text-[#0E9BF0]">Monday - Friday</span>
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-[#E8EDF4]">
                  <span className="text-[0.88rem] text-[#4A5568]">Monday - Friday</span>
                  <span className="text-[0.88rem] font-semibold text-[#1C2E4A]">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8EDF4]">
                  <span className="text-[0.88rem] text-[#4A5568]">Saturday - Sunday</span>
                  <span className="text-[0.88rem] font-semibold text-[#1C2E4A]">Closed</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[0.88rem] text-[#4A5568]">Response Time</span>
                  <span className="text-[0.88rem] font-semibold text-[#1C2E4A]">&lt; 4 hours (business hours)</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl border border-[#E8EDF4]">
                <p className="text-[0.82rem] text-[#4A5568] leading-relaxed">
                  <strong className="font-semibold text-[#1C2E4A]">📌 Note:</strong> All strategy calls are scheduled within 24-48 hours. 
                  We'll send you a calendar invite with a Google Meet link.
                </p>
              </div>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <h3 className="text-[1rem] font-bold mb-4">What to Expect on Your Call</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">1.</span>
                  <span className="text-[0.85rem] text-white/70">Quick intro & understanding your business model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">2.</span>
                  <span className="text-[0.85rem] text-white/70">Review your current GHL setup (if any)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">3.</span>
                  <span className="text-[0.85rem] text-white/70">Identify gaps and opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">4.</span>
                  <span className="text-[0.85rem] text-white/70">Outline a clear action plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">5.</span>
                  <span className="text-[0.85rem] text-white/70">Share next steps and timeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Quick Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2rem]] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3.5 text-[#1C2E4A]">
              Before You Reach Out
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">How soon can you start?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">We typically start within 3-5 business days after discovery call and contract signing.</p>
            </div>
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">Do you work with clients outside India?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">Yes! We serve clients in US, UK, Australia, Canada, UAE, and 6+ countries.</p>
            </div>
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">Is the strategy call really free?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">Yes, no strings attached. Just a technical conversation to see if we can help.</p>
            </div>
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">What if I already have a GHL account?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">Perfect! We can audit your existing setup and fix what's broken.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}