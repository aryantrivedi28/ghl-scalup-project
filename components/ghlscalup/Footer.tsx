import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border-dark">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-indigo-400 font-bold text-xs text-white tracking-wider">
                GHL
              </div>
              <span className="font-bold text-lg text-primary-text">GHLScaleUp</span>
            </Link>
            <p className="text-sm text-muted-text leading-relaxed font-light max-w-xs mt-4">
              The leading GHL growth partner for agencies and businesses worldwide. Scale faster. Earn more. Build better.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-secondary-text mb-4">
              Product
            </h4>
            <ul className="space-y-3 list-none">
              {['Features', 'Pricing', 'Security', 'API Docs'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-text text-sm transition-colors hover:text-primary-text font-light no-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-secondary-text mb-4">
              Company
            </h4>
            <ul className="space-y-3 list-none">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-text text-sm transition-colors hover:text-primary-text font-light no-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-secondary-text mb-4">
              Legal
            </h4>
            <ul className="space-y-3 list-none">
              {['Privacy', 'Terms', 'Cookies', 'Compliance'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-text text-sm transition-colors hover:text-primary-text font-light no-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-text font-light mb-4 md:mb-0">
            © {currentYear} GHLScaleUp. All rights reserved. | Built with ❤️ for ambitious agencies
          </p>
          <div className="flex gap-6">
            {[
              { name: 'Twitter', url: '#' },
              { name: 'LinkedIn', url: '#' },
              { name: 'Facebook', url: '#' },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="text-muted-text text-xs transition-colors hover:text-secondary-text font-light no-underline"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
