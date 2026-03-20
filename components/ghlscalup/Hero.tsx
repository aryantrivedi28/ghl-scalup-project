'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [activeSegment, setActiveSegment] = useState(0)

  useEffect(() => {
    const segments = [0, 1, 2, 3]
    let currentIndex = 0
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % segments.length
      setActiveSegment(currentIndex)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-32 pb-20 px-6">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(ellipse, var(--accent-warm-glow), transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="badge-base mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-dot" />
              <span>Trusted by 100+ Agencies</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl lg:text-6xl leading-tight mb-6 font-light tracking-tight text-balance">
              Scale Your GHL{' '}
              <em className="not-italic bg-gradient-to-r from-accent-bright to-indigo-400 bg-clip-text text-transparent">
                Business Effortlessly
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-secondary-text leading-relaxed mb-10 max-w-xl font-light">
              Get proven strategies, expert support, and cutting-edge tools to scale your GHL agency and dominate your market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3.5 bg-accent text-white text-base font-semibold rounded-lg transition-all hover:bg-accent-bright hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start Free Trial
                <span>→</span>
              </button>
              <button className="px-8 py-3.5 bg-transparent text-primary-text border border-border-dark text-base font-medium rounded-lg transition-all hover:border-muted-text hover:bg-white/3%">
                Watch Demo
              </button>
            </div>

            {/* Proof Points */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border-dark">
              <div>
                <h4 className="font-serif text-3xl text-primary-text mb-0.5">500%</h4>
                <p className="text-xs text-muted-text font-medium">Average Growth</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-primary-text mb-0.5">24/7</h4>
                <p className="text-xs text-muted-text font-medium">Expert Support</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-primary-text mb-0.5">99.9%</h4>
                <p className="text-xs text-muted-text font-medium">Uptime Guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Card */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-lg rounded-2xl border border-border-dark bg-card-bg p-8 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-indigo-400 text-lg">
                  📊
                </div>
                <div>
                  <h3 className="font-semibold text-base text-primary-text">Growth Metrics</h3>
                  <p className="text-xs text-muted-text">Real-time tracking</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg bg-white/3% border border-border-dark p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-text mb-1">Monthly Revenue</p>
                  <p className="font-serif text-2xl text-accent-bright">$24.5K</p>
                </div>
                <div className="rounded-lg bg-white/3% border border-border-dark p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-text mb-1">Active Clients</p>
                  <p className="font-serif text-2xl text-accent-green">127</p>
                </div>
              </div>

              {/* Pipeline Bar */}
              <div>
                <p className="text-xs text-muted-text mb-2.5">Client Pipeline</p>
                <div className="h-2 bg-white/6% rounded-full overflow-hidden flex gap-0.5">
                  <div className="flex-1 bg-accent animate-grow-bar" style={{ animationDelay: '0.3s' }} />
                  <div className="flex-1 bg-accent-green animate-grow-bar" style={{ animationDelay: '0.5s' }} />
                  <div className="flex-1 bg-accent-warm animate-grow-bar" style={{ animationDelay: '0.7s' }} />
                  <div className="flex-1 bg-indigo-400 animate-grow-bar" style={{ animationDelay: '0.9s' }} />
                </div>
                <div className="flex gap-4 mt-3">
                  <span className="text-xs text-muted-text flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Leads
                  </span>
                  <span className="text-xs text-muted-text flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-green" />
                    Qualified
                  </span>
                  <span className="text-xs text-muted-text flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-warm" />
                    Proposals
                  </span>
                  <span className="text-xs text-muted-text flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
