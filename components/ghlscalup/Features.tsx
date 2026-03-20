export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning-Fast Setup',
      description: 'Get up and running in minutes with our intuitive onboarding process.',
      color: 'blue',
    },
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'Advanced segmentation tools to reach the right clients at the right time.',
      color: 'green',
    },
    {
      icon: '📈',
      title: 'Growth Analytics',
      description: 'Real-time insights into your business metrics and performance trends.',
      color: 'amber',
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards.',
      color: 'purple',
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team communication and project management.',
      color: 'rose',
    },
    {
      icon: '🚀',
      title: 'API Integration',
      description: 'Connect with 50+ popular platforms via our robust API.',
      color: 'cyan',
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-500/10',
      green: 'bg-green-500/10',
      amber: 'bg-amber-500/10',
      purple: 'bg-purple-500/10',
      rose: 'bg-rose-500/10',
      cyan: 'bg-cyan-500/10',
    }
    return colorMap[color] || 'bg-blue-500/10'
  }

  return (
    <section id="features" className="py-24 bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Powerful Features
            </span>
            <div className="w-6 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl mb-4 text-primary-text font-light">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed font-light">
            Comprehensive tools and features designed specifically for GHL agencies to maximize growth and client satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-7 rounded-xl border border-border-dark bg-card-bg transition-all duration-300 hover:border-accent/15 hover:bg-card-bg-hover hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center text-2xl mb-5`}>
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-primary-text mb-2">{feature.title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
