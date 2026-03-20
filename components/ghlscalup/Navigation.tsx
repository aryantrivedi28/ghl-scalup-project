'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/92 border-b border-border-dark backdrop-blur-xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-indigo-400 font-bold text-xs text-white tracking-wider">
            GHL
          </div>
          <span className="font-bold text-lg text-primary-text">GHLScaleUp</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <Link
              href="#features"
              className="text-sm font-medium text-secondary-text transition-colors hover:text-primary-text no-underline"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-sm font-medium text-secondary-text transition-colors hover:text-primary-text no-underline"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#why-us"
              className="text-sm font-medium text-secondary-text transition-colors hover:text-primary-text no-underline"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-secondary-text transition-colors hover:text-primary-text no-underline"
            >
              Testimonials
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:inline-block px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg transition-all hover:bg-accent-bright hover:shadow-lg hover:-translate-y-0.5 no-underline">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden bg-none border-none cursor-pointer p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-primary-text transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary-text my-1.5 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary-text transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-xl border-t border-border-dark">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link href="#features" className="text-secondary-text hover:text-primary-text transition-colors no-underline">
              Features
            </Link>
            <Link href="#services" className="text-secondary-text hover:text-primary-text transition-colors no-underline">
              Services
            </Link>
            <Link href="#why-us" className="text-secondary-text hover:text-primary-text transition-colors no-underline">
              Why Us
            </Link>
            <Link href="#testimonials" className="text-secondary-text hover:text-primary-text transition-colors no-underline">
              Testimonials
            </Link>
            <button className="w-full px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg transition-all hover:bg-accent-bright">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
