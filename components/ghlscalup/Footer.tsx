// components/ghlscalup/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0B1421] text-white pt-16 pb-0">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.3fr] gap-10 pb-4">
          <div>
            <div className="mb-2">
              <Link href="/">
                <Image src="/ghlscalup.png" alt="GHL Scale Up" width={150} height={100} className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
              </Link>
            </div>
            <p className="text-[0.82rem] text-[#8A9BB0] font-light leading-relaxed max-w-[300px]">
              The #1 GoHighLevel expert agency for marketing agencies and businesses. We build complete
              GHL systems CRM, automation, AI, funnels, SaaS so you can scale without the tech headaches.
            </p>
          </div>

          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-4.5">GHL Services</h4>
            <ul className="list-none">
              <li className="mb-2.5"><Link href="/services/crm-setup" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">GHL CRM Setup</Link></li>
              <li className="mb-2.5"><Link href="/services/workflow-automation" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">AI Workflow Automation</Link></li>
              <li className="mb-2.5"><Link href="/services/funnel-development" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Funnel Development</Link></li>
              <li className="mb-2.5"><Link href="/services/campaign-automation" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Campaign Automation</Link></li>
              <li className="mb-2.5"><Link href="/services/saas-setup" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">White-Label SaaS</Link></li>
              <li className="mb-2.5"><Link href="/services/migration" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">GHL Migration</Link></li>
              <li className="mb-2.5"><Link href="/services/reporting" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Reporting Dashboards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-4.5">Company</h4>
            <ul className="list-none">
              <li className="mb-2.5"><Link href="/about" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">About Us</Link></li>
              <li className="mb-2.5"><Link href="/case-studies" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Case Studies</Link></li>
              <li className="mb-2.5"><Link href="/how-we-work" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">How We Work</Link></li>
              <li className="mb-2.5"><Link href="/blog" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Blog</Link></li>
              <li className="mb-2.5"><Link href="/contact" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Contact</Link></li>
              <li className="mb-2.5"><Link href="/work-with-us" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Work with us</Link></li>
              <li className="mb-2.5"><Link href="/contact-us" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-4.5">Get in Touch</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <a href="mailto:aryan@ghlscaleup.com" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors flex items-center gap-2 group">
                  <Mail className="h-3.5 w-3.5 text-white/45 group-hover:text-[#0E9BF0] transition-colors" />
                  <span>aryan@ghlscaleup.com</span>
                </a>
              </li>
              <li className="mb-2.5">
                <a href="https://wa.me/919893270210?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors flex items-center gap-2 group">
                  <Phone className="h-3.5 w-3.5 text-white/45 group-hover:text-[#0E9BF0] transition-colors" />
                  <span>+91 98932 70210</span>
                </a>
              </li>
              <li className="mb-2.5">
                <Link href="https://www.ghlscaleup.com" target="_blank" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors flex items-center gap-2 group">
                  <Globe className="h-3.5 w-3.5 text-white/45 group-hover:text-[#0E9BF0] transition-colors" />
                  <span>www.ghlscaleup.com</span>
                  <ExternalLink className="h-3 w-3 text-white/45 group-hover:text-[#0E9BF0] transition-colors" />
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/company/ghl-scale-up"
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://x.com/GHLScaleUp"
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all group"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                {/* <Link
                  href="https://facebook.com/ghlscaleup"
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link> */}
                <Link 
                  href="https://www.instagram.com/ghl_scale_up" 
                  target="_blank" 
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.youtube.com/@scaleghlsystems"
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0E9BF0] hover:text-white hover:border-[#0E9BF0] transition-all group"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-5 flex flex-col md:flex-row justify-between items-center text-[0.72rem] text-[#8A9BB0] font-light">
          <span>© 2026 GHL Scale Up. All rights reserved.</span>
          <div className="flex gap-5 mt-3 md:mt-0">
            <Link href="#privacy" className="text-[#8A9BB0] text-[0.72rem] hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-[#8A9BB0] text-[0.72rem] hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="#refund" className="text-[#8A9BB0] text-[0.72rem] hover:text-white/60 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer