// app/services/website-development/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import { 
  Palette, 
  Smartphone, 
  Search, 
  Zap, 
  FileText, 
  Link as LinkIcon,
  Clock,
  ArrowRight,
  CheckCircle2,
  Settings,
  GitBranch,
  Rocket,
} from 'lucide-react';

export const metadata = {
  title: 'GHL Website Development Services | GHL Scale Up',
  description: 'Professional GHL website development with custom designs, SEO optimization, mobile responsiveness, and CRM integration. 200+ websites built. Get a free consultation.',
  keywords: 'GHL website development, GoHighLevel website builder, custom GHL websites, GHL landing pages, GHL web design',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/website-development',
  },
};

// Service Schema Component
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GoHighLevel Website Development",
    "alternateName": "GHL Web Design Services",
    "description": "Professional GoHighLevel website development with custom designs, SEO optimization, mobile responsiveness, and CRM integration. Build fast-loading, mobile-responsive websites that capture leads directly into your CRM.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "GHL Scale Up",
      "url": "https://www.ghlscaleup.com",
      "logo": "https://www.ghlscaleup.com/web-app-manifest-192x192.png",
      "sameAs": [
        "https://www.linkedin.com/company/ghl-scale-up",
        "https://x.com/GHLScaleUp"
      ]
    },
    "serviceType": "Website Development",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Business Website"
          },
          "price": "2497",
          "priceCurrency": "USD",
          "description": "5-page custom website with SEO optimization"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Website"
          },
          "price": "3997",
          "priceCurrency": "USD",
          "description": "Full e-commerce site with product pages and checkout"
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Small Businesses, Agencies, Service Providers"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free website consultation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function WebsiteDevelopmentPage() {
  // Related blog posts for this service
  const relatedBlogs = [
    {
      slug: 'gohighlevel-funnel-builder-features',
      title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster',
      excerpt: 'Discover the GoHighLevel funnel builder features most agencies overlook version control, global sections, custom values, and more.',
      readTime: '9 min read',
      date: 'April 7, 2026'
    },
    {
      slug: 'what-is-gohighlevel',
      title: 'What Is GoHighLevel? The Complete Guide for 2026',
      excerpt: 'GoHighLevel is an all-in-one CRM and marketing platform built for agencies and service businesses. Learn what it does and who it is for.',
      readTime: '12 min read',
      date: 'May 2, 2026'
    },
    {
      slug: 'ghl-lead-generation-strategies',
      title: 'How to Generate High-Quality Leads Using GHL',
      excerpt: 'Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation.',
      readTime: '6 min read',
      date: 'March 20, 2026'
    }
  ];

  return (
    <>
      {/* Add Service Schema to Head */}
      <ServiceSchema />
      
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'GHL Website Development' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GHL Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                GHL Website<br />
                <span className="text-[#F8D000]">Development</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We build <strong className="text-white/90 font-medium">fully functional, mobile-responsive websites inside GoHighLevel</strong> complete with custom design, SEO optimization, and CRM integration. No coding required on your end.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Website Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Website Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Websites built</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Mobile responsive</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">40%</div>
                  <div className="text-[0.78rem] text-white/50">Faster load times</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">SEO</div>
                  <div className="text-[0.78rem] text-white/50">Optimized for search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What's Included
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Everything You Need for<br />
              <span className="text-[#0E9BF0]">A Professional Website</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Your website is your digital storefront. We build it to impress, convert, and perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Palette className="w-5 h-5" />, color: 'blue', title: 'Custom Design & Branding', description: 'Unique, professional designs that match your brand identity. No templates. Every site is built from scratch to reflect your business personality and values.' },
              { icon: <Smartphone className="w-5 h-5" />, color: 'green', title: 'Mobile Responsive Design', description: 'Fully optimized for all devices desktop, tablet, and mobile. Your site looks perfect and functions flawlessly on every screen size.' },
              { icon: <Search className="w-5 h-5" />, color: 'yellow', title: 'SEO Optimization', description: 'Built-in SEO best practices including meta tags, heading structure, alt text, sitemaps, and fast loading speeds to rank higher in search results.' },
              { icon: <Zap className="w-5 h-5" />, color: 'blue', title: 'Fast Loading Performance', description: 'Optimized images, clean code, and efficient structure for lightning-fast page loads. Speed matters for both user experience and SEO rankings.' },
              { icon: <FileText className="w-5 h-5" />, color: 'green', title: 'Content Management System', description: 'Easy-to-use CMS built into GHL. Update text, images, and pages yourself without technical skills or developer assistance.' },
              { icon: <LinkIcon className="w-5 h-5" />, color: 'yellow', title: 'CRM & Form Integration', description: 'Connect contact forms, booking calendars, and lead capture directly to your GoHighLevel CRM. Every lead is automatically tracked and followed up.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 ${
                  item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' : 
                  item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                Is GHL Website Development<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Your website is often the first impression potential customers have of your business. If it's slow, outdated, or doesn't convert, you're losing opportunities every day.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">GHL website development makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> A business owner needing a professional, modern website</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> An agency wanting to offer websites to your clients</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Currently on WordPress, Wix, or Squarespace and want better integration</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Needing a site that captures leads and integrates with your CRM</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Tired of managing multiple tools for website, CRM, and marketing</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">Why Choose GHL for Your Website</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Traditional website platforms like WordPress and Wix don't integrate seamlessly with your marketing tools. GHL combines website, CRM, and automation in one platform no more duct-taping tools together.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Your GHL website captures leads directly into your CRM, triggers automations instantly, and gives you complete visibility into visitor behavior all without multiple subscriptions or complex integrations.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">50%</div>
                  <div className="text-[0.78rem] text-white/50">Faster lead capture</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">1 Tool</div>
                  <div className="text-[0.78rem] text-white/50">Instead of 5 separate subscriptions</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Integration with your marketing stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Website Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Build Your<br />
              <span className="text-[#0E9BF0]">GHL Website</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A streamlined process from concept to launch, ensuring your site is built right the first time.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Strategy', description: 'We learn about your business, target audience, goals, and brand identity. We analyze competitors and define the site structure, user flow, and conversion strategy before any design work begins.' },
              { title: 'Wireframing & Design', description: 'We create wireframes and design mockups for your approval. You see exactly how your site will look and feel before we build anything. No surprises.' },
              { title: 'Development & Content', description: 'We build your site inside GoHighLevel with your approved design. We add your content, images, videos, and forms. Everything is set up for optimal performance and SEO.' },
              { title: 'Integration & Testing', description: 'We connect forms to your CRM, set up analytics tracking, and test every page, form, and link across all devices. We ensure everything works perfectly.' },
              { title: 'Launch & Training', description: 'We launch your site, monitor performance, and provide training on how to manage content, update pages, and view analytics. You have full control.' },
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[#E8EDF4] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-[0.9rem] font-extrabold text-[#F8D000] flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Free Resources
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Read Our<br />
              <span className="text-[#0E9BF0]">Website & Funnel Guides</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Learn more about building high-converting websites and funnels with these in-depth articles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((blog, index) => (
              <Link 
                key={index}
                href={`/blog/${blog.slug}`}
                className="group bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-[0.65rem] text-[#5C6880] mb-2">
                    <span className="text-[#0E9BF0] font-semibold">Website & Funnels</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[0.75rem] text-[#5C6880] leading-relaxed mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all mt-auto">
                    Read Full Guide <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Build a Website That<br />
            <span className="text-[#F8D000]">Actually Works for Your Business?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free consultation. We'll review your current website (or lack of one), understand your goals, and show you how a GHL website can transform your online presence.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Consultation →
            </Link>
            <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              Or Email Us Directly
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Common Questions About<br />
              <span className="text-[#0E9BF0]">GHL Websites</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does GHL website development take?', a: 'A standard 5-page website takes 2-3 weeks. E-commerce or complex sites with membership areas take 3-4 weeks. We provide a timeline during our discovery call.' },
              { q: 'Can I update the website myself after launch?', a: 'Yes. We build your site with GHLs easy-to-use CMS. You can update text, images, and even add new pages without any technical skills. We also provide training.' },
              { q: 'Do you provide content writing and images?', a: 'We can. We offer copywriting services and can source professional images. Or you can provide your own content either way, we will handle the implementation.' },
              { q: 'Will my website be SEO optimized?', a: 'Absolutely. We build with SEO best practices including proper heading structure, meta descriptions, alt tags, fast loading speeds, and mobile responsiveness. We can also set up Google Search Console and analytics.' },
              { q: 'Can I migrate my existing WordPress site to GHL?', a: 'Yes. We can migrate your existing content, pages, and blog posts from WordPress, Wix, Squarespace, or any other platform to GHL while preserving your SEO rankings.' },
              { q: 'What about hosting and domain?', a: 'GHL includes hosting. You can use your existing domain or we can help you register a new one. There are no separate hosting fees everything is included in your GHL subscription.' },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#E8EDF4]">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <span className="text-[0.7rem] text-[#8A9BB0] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pt-2 pb-3">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Related GHL Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Maximize Your Website's Potential<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Capture leads from your website and manage them effectively with a properly configured GHL CRM system.', href: '/services/crm-setup', icon: <Settings className="w-5 h-5" /> },
              { title: 'Workflow Automation', description: 'Automate follow-ups triggered by website actions form submissions, page views, and more.', href: '/services/workflow-automation', icon: <GitBranch className="w-5 h-5" /> },
              { title: 'Sales Funnel Development', description: 'Add high-converting landing pages and opt-in forms to capture more leads from your traffic.', href: '/services/funnel-development', icon: <Rocket className="w-5 h-5" /> },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
                  {service.icon}
                </div>
                <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand 
        title='Your Website Should Be Your<br /><span class="hl-yellow">Best Salesperson.</span>'
        description="Stop losing customers to slow, outdated, or hard-to-use websites. Let us build you a GHL site that works 24/7 to capture leads and grow your business."
        primaryText="Book Your Free Consultation →"
        primaryHref="/contact-us"
      />
    </>
  );
}