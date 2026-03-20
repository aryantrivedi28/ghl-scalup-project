export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      quote:
        'GHLScaleUp transformed our agency overnight. We went from $15K to $85K MRR in just 6 months. Their strategies are game-changing!',
      author: 'Sarah Johnson',
      role: 'Founder, Digital Growth Co',
      initials: 'SJ',
    },
    {
      stars: '★★★★★',
      quote:
        'The support team is incredible. They genuinely care about your success and go above and beyond to help you reach your goals.',
      author: 'Marcus Chen',
      role: 'Agency Owner, Premium Services',
      initials: 'MC',
    },
    {
      stars: '★★★★★',
      quote:
        'Best investment we made for our business. The ROI has been phenomenal and the training is top-notch. Highly recommended!',
      author: 'Jessica Williams',
      role: 'CEO, Elite Agencies Network',
      initials: 'JW',
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Social Proof
            </span>
            <div className="w-6 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl mb-4 text-primary-text font-light">
            Loved by Agencies
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed font-light">
            See what our clients are saying about their transformation journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border-light bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="text-accent-warm text-sm tracking-widest mb-4">
                {testimonial.stars}
              </div>

              {/* Quote */}
              <blockquote className="text-base text-dark-text-secondary leading-relaxed mb-6 font-light italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-indigo-400 flex items-center justify-center font-semibold text-xs text-white flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-dark-text">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-text">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl text-primary-text mb-2">4.9/5</p>
            <p className="text-secondary-text">Average Rating</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-primary-text mb-2">500+</p>
            <p className="text-secondary-text">Happy Clients</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-primary-text mb-2">$200M+</p>
            <p className="text-secondary-text">Total Client Revenue</p>
          </div>
        </div>
      </div>
    </section>
  )
}
