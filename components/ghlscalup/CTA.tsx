export default function CTA() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      {/* Gradient Orb */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Ready to Scale
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-6xl mb-6 text-primary-text font-light leading-tight">
            Transform Your Agency Today
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-secondary-text leading-relaxed mb-8 font-light">
            Join hundreds of agencies who are scaling faster, making more money, and enjoying their business more than ever before.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-accent text-white text-base font-semibold rounded-lg transition-all hover:bg-accent-bright hover:shadow-xl hover:-translate-y-0.5">
              Start Your Growth Journey
            </button>
            <button className="px-10 py-4 bg-transparent text-primary-text border border-border-dark text-base font-medium rounded-lg transition-all hover:border-muted-text hover:bg-white/3%">
              Schedule Free Consultation
            </button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-text mt-8">
            ✓ Money-back guarantee · ✓ No credit card required · ✓ Expert support included
          </p>
        </div>
      </div>
    </section>
  )
}
