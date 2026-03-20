export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Strategy Development',
      description: 'Custom growth strategies tailored to your unique business goals and market position.',
    },
    {
      number: '02',
      title: 'Implementation Support',
      description: 'End-to-end implementation assistance with dedicated specialists guiding every step.',
    },
    {
      number: '03',
      title: 'Optimization & Scaling',
      description: 'Continuous optimization and scaling strategies to maximize your ROI.',
    },
    {
      number: '04',
      title: 'Training & Education',
      description: 'Comprehensive training programs to upskill your team on best practices.',
    },
    {
      number: '05',
      title: '24/7 Support',
      description: 'Round-the-clock expert support ensuring you never face obstacles alone.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-light-bg text-dark-text">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-5xl mb-4 text-dark-text font-light">
            Services Designed for Scale
          </h2>
          <p className="text-lg text-dark-text-secondary leading-relaxed font-light max-w-xl">
            A comprehensive range of services to support your growth journey every step of the way.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-start">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-7 rounded-xl border border-border-light bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-default"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs bg-blue-500/8 text-accent px-2.5 py-1 rounded font-semibold">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-dark-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-text-secondary leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sticky visual element */}
          <div className="hidden lg:flex items-center justify-center relative sticky top-32">
            <div className="w-full max-w-sm">
              <div className="relative">
                {/* Decorative gradient circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-3xl" />
                
                <div className="relative bg-white border border-border-light rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-text font-semibold mb-2">
                        Key Benefits
                      </p>
                      <h3 className="font-serif text-2xl text-dark-text mb-4">
                        Proven Results
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {['2-3x Revenue Growth', 'Reduced Churn Rate', 'Faster Onboarding', 'Higher Client Retention'].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-green" />
                          <span className="text-sm text-dark-text-secondary font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
