export default function Process() {
  const steps = [
    {
      icon: '📋',
      title: 'Discovery',
      description: 'We learn about your business, goals, and current challenges.',
    },
    {
      icon: '🎯',
      title: 'Strategy',
      description: 'Develop a customized growth strategy based on your unique needs.',
    },
    {
      icon: '⚙️',
      title: 'Implementation',
      description: 'Execute the strategy with our expert team by your side.',
    },
    {
      icon: '📊',
      title: 'Optimization',
      description: 'Continuously monitor and optimize for maximum results.',
    },
    {
      icon: '🚀',
      title: 'Scale',
      description: 'Leverage proven systems to scale your agency exponentially.',
    },
  ]

  return (
    <section className="py-24 bg-light-bg text-dark-text">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Our Process
            </span>
            <div className="w-6 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl mb-4 text-dark-text font-light">
            Simple Path to Success
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-12 left-10% right-10% h-0.5 bg-border-light" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
              >
                {/* Dot */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-border-light flex items-center justify-center mx-auto mb-6 relative z-10 transition-all group hover:border-accent hover:shadow-lg hover:shadow-accent/15 text-2xl group cursor-default">
                  {step.icon}
                </div>

                {/* Title and Description */}
                <h4 className="font-semibold text-base text-dark-text mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-dark-text-secondary leading-relaxed font-light px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
