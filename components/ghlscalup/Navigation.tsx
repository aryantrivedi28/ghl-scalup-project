// components/ghlscalup/Navigation.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#1C2E4A] sticky top-0 z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/GHL_Scale_Up.svg" 
              alt="GHL Scale Up - GoHighLevel Expert Agency" 
              width={120} 
              height={48}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none">
            <li><Link href="#about" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">About Us</Link></li>
            <li><Link href="#services" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Services</Link></li>
            <li><Link href="#process" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">How We Work</Link></li>
            <li><Link href="#results" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Case Studies</Link></li>
            <li><Link href="#industries" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Industries</Link></li>
            <li><Link href="#blog" className="text-white/75 hover:text-white text-[0.84rem] font-medium transition-colors">Blog</Link></li>
          </ul>

          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+919893270210" className="text-white/60 text-[0.8rem]">+91 98932 70210</a>
            <Link href="#contact" className="bg-[#F8D000] text-[#0B1421] px-6 py-2.5 rounded-lg text-[0.82rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all">
              Get in Touch
            </Link>
          </div>

          <button 
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white rounded"></span>
            <span className="w-6 h-0.5 bg-white rounded"></span>
            <span className="w-6 h-0.5 bg-white rounded"></span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 bg-[#1C2E4A] py-6 px-4 z-[999] border-t border-white/10" style={{ top: '72px' }}>
            <ul className="flex flex-col gap-4 list-none">
              <li><Link href="#about" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link href="#services" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
              <li><Link href="#process" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>How We Work</Link></li>
              <li><Link href="#results" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link></li>
              <li><Link href="#industries" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link></li>
              <li><Link href="#blog" className="text-white text-base block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
              <li><a href="tel:+919893270210" className="text-white text-base block py-2">+91 98932 70210</a></li>
              <li><Link href="#contact" className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg text-center font-bold block mt-2" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation