'use client';

import Link from 'next/link';

export default function Navigation() {
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="relative z-10 flex items-center justify-between px-5 md:px-12 py-5 md:py-6 border-b border-white/10 backdrop-blur-md bg-[#071833]/80">
      <Link href="/" className="flex items-center gap-3">
        <div className="bg-[#F5C518] w-10 h-10 rounded-lg flex items-center justify-center text-lg">
          📈
        </div>
        <div className="font-poppins font-bold text-base md:text-lg">
          GHL <span className="text-[#3B9EE8]">Scale</span><span className="text-[#2ECC71]">Up</span>
        </div>
      </Link>
      <button
        onClick={scrollToForm}
        className="bg-[#F5C518] text-[#071833] font-poppins font-bold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-md hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
      >
        Register Now →
      </button>
    </nav>
  );
}