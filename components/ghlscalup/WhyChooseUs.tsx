export default function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Deep GHL Expertise',
      description: 'Our team has 100+ years of combined GHL platform experience and success stories.',
    },
    {
      number: '02',
      title: 'Dedicated Account Manager',
      description: 'Get a personal expert who understands your business and guides your growth strategy.',
    },
    {
      number: '03',
      title: 'Proven Success Framework',
      description: 'Our proprietary methodology has helped agencies scale from $10K to $500K+ MRR.',
    },
    {
      number: '04',
      title: 'Custom Solutions',
      description: 'No cookie-cutter approaches. Every strategy is tailored to your unique situation.',
    },
  ]

  return (
    <section id="why-us" className="py-24 bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Why Choose Us
            </span>
            <div className="w-6 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl mb-4 text-primary-text font-light">
            Partner With the Best
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed font-light">
            Here's why thousands of agencies trust us to scale their GHL businesses.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-border-dark bg-card-bg transition-all duration-300 hover:border-accent/12 overflow-hidden"
            >
              {/* Top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <p className="font-serif text-5xl text-accent/12 mb-4 leading-none">
                {reason.number}
              </p>
              <h3 className="font-semibold text-xl text-primary-text mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-secondary-text mb-6 text-lg">Ready to transform your agency?</p>
          <button className="px-8 py-3.5 bg-accent text-white text-base font-semibold rounded-lg transition-all hover:bg-accent-bright hover:shadow-xl hover:-translate-y-0.5">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
