// components/ghlscalup/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#0B1421] text-white pt-16 pb-0">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.3fr] gap-10 pb-4">
          <div>
            <div className="mb-2">
              <Image src="/ghlscalup.png" alt="GHL Scale Up" width={150} height={100} className="h-12 w-auto" />
            </div>
            <p className="text-[0.82rem] text-[#8A9BB0] font-light leading-relaxed max-w-[300px]">
              The #1 GoHighLevel expert agency for marketing agencies and businesses. We build complete
              GHL systems CRM, automation, AI, funnels, SaaS so you can scale without the tech headaches.
            </p>
            <p className="text-[0.72rem] text-[#8A9BB0] mt-4">A service by <strong className="text-white/60">Finzie</strong> • finzie.co</p>
          </div>
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-4.5">GHL Services</h4>
            <ul className="list-none">
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">GHL CRM Setup</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">AI Workflow Automation</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Funnel Development</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Campaign Automation</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">White-Label SaaS</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">GHL Migration</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Reporting Dashboards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-4.5">Company</h4>
            <ul className="list-none">
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">About Us</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Case Studies</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">How We Work</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Industries</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Blog</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Careers</Link></li>
              <li className="mb-2.5"><Link href="#" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8A9BB0] mb-4.5">Get in Touch</h4>
            <ul className="list-none">
              <li className="mb-2.5"><a href="mailto:aryan@finzie.co" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">✉️ aryan@ghlscaleup.com</a></li>
              <li className="mb-2.5"><a href="tel:+919893270210" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">📞 +91 98932 70210</a></li>
              <li className="mb-2.5"><a href="https://www.ghlscaleup.com" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">🌐 www.ghlscaleup.com</a></li>
              <li className="mb-2.5"><a href="https://www.finzie.co" className="text-white/45 text-[0.82rem] font-light hover:text-[#0E9BF0] transition-colors">🌐 www.finzie.co</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-5 flex flex-col md:flex-row justify-between items-center text-[0.72rem] text-[#8A9BB0] font-light">
          <span>© 2026 GHL Scale Up. All rights reserved. A Finzie company.</span>
          <div className="flex gap-5 mt-3 md:mt-0">
            <Link href="#" className="text-[#8A9BB0] text-[0.72rem] hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#8A9BB0] text-[0.72rem] hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[#8A9BB0] text-[0.72rem] hover:text-white/60 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer