// app/services/migration/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import {
  ClipboardList,
  Wrench,
  RefreshCw,
  Building2,
  Settings,
  CheckCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Database,
  GitBranch,
  Rocket,
  Zap,
  Layers,
  Cloud
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import { generateFaqSchema } from '@/lib/faqSchema';

export const metadata = {
  title: 'GHL Migration Services | GHL Scale Up',
  description: 'Expert migration from ClickFunnels, Kajabi, HubSpot, ActiveCampaign, and any CRM to GoHighLevel. 200+ successful migrations. Get a free migration assessment.',
  keywords: 'GHL migration, migrate to GoHighLevel, ClickFunnels to GHL, HubSpot migration, CRM migration',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/migration',
  },
};

// Service Schema Component
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GoHighLevel Migration Services",
    "alternateName": "GHL Platform Migration",
    "description": "Complete migration from ClickFunnels, Kajabi, HubSpot, ActiveCampaign, Infusionsoft, and any CRM to GoHighLevel. Includes pre-migration audit, data mapping and cleanup, full data migration, funnel and page migration, automation rebuild, and post-migration validation. Zero data loss and zero downtime guaranteed.",
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
    "serviceType": "Data Migration",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Migration Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Migration"
          },
          "price": "1497",
          "priceCurrency": "USD",
          "description": "Single platform migration with data transfer"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complex Migration"
          },
          "price": "2997",
          "priceCurrency": "USD",
          "description": "Multi-platform migration with automation rebuild"
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Agencies, Businesses on Multiple Platforms, CRM Users"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free migration assessment"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function MigrationPage() {
  // Related blog posts for this service
  const relatedBlogs = [
    {
      slug: 'gohighlevel-vs-hubspot',
      title: 'GoHighLevel vs HubSpot (2026): Honest Comparison for Agencies',
      excerpt: 'GoHighLevel vs HubSpot the real differences in pricing, features, and who each platform is actually built for. For agencies managing multiple clients, GHL wins.',
      readTime: '19 min read',
      date: 'May 15, 2026'
    },
    {
      slug: 'what-is-gohighlevel',
      title: 'What Is GoHighLevel? The Complete Guide for 2026',
      excerpt: 'Comprehensive guide to GoHighLevel covering all features and why businesses are migrating from other platforms to GHL.',
      readTime: '12 min read',
      date: 'May 2, 2026'
    },
    {
      slug: 'gohighlevel-pricing',
      title: 'GoHighLevel Pricing 2026: All Plans, Real Costs & Hidden Fees',
      excerpt: 'Complete breakdown of GoHighLevel pricing compared to other platforms to help you understand cost savings from migration.',
      readTime: '20 min read',
      date: 'May 14, 2026'
    }
  ];

  const faqs = [
    { q: 'What platforms can you migrate from?', a: 'ClickFunnels, Kajabi, HubSpot, Salesforce, ActiveCampaign, Infusionsoft, Zoho, Pipedrive, Keap, Ontraport, WordPress, Wix, Squarespace, and custom spreadsheets. If your data is in a system, we can migrate it.' },
    { q: 'Will I lose any data during migration?', a: 'No. We guarantee 100% data integrity. We validate every record before and after migration to ensure nothing is lost. Your data is safe with us.' },
    { q: 'How long does migration take?', a: 'Simple migrations (1-2 platforms, small data) take 1-2 weeks. Complex migrations (multiple platforms, large data, complex automations) take 2-4 weeks. We provide timeline during assessment.' },
    { q: 'Will my funnels look the same?', a: 'Yes. We rebuild your funnels and pages to match your original design. Your customers won\'t notice the switch. We can also improve design and performance during migration.' },
    { q: 'What about email sequences and automations?', a: 'We rebuild all your email sequences, SMS workflows, and automations in GHL. We improve logic and reliability while maintaining the same customer experience.' },
    { q: 'Is there any downtime?', a: 'No. We perform migration in the background while your old system remains active. We only switch over when everything is validated and ready. Zero business disruption.' },
  ];

  generateFaqSchema(faqs);

  return (
    <>
      {/* Add Service Schema to Head */}
      <ServiceSchema />

      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'GHL Migration Services' }]} />

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
                GHL Migration<br />
                <span className="text-[#F8D000]">Services</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We handle <strong className="text-white/90 font-medium">complete migration from ClickFunnels, Kajabi, HubSpot, ActiveCampaign, Infusionsoft, and any CRM to GoHighLevel</strong> with zero data loss and zero downtime.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Migration Assessment →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Migration Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Successful migrations</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">15+</div>
                  <div className="text-[0.78rem] text-white/50">Platforms migrated from</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Data integrity guaranteed</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">0</div>
                  <div className="text-[0.78rem] text-white/50">Downtime during migration</div>
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
              <span className="text-[#0E9BF0]">A Seamless Migration</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Moving to GoHighLevel doesn't have to be stressful. We handle everything so you can focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <ClipboardList className="w-5 h-5" />, color: 'blue', title: 'Pre-Migration Audit', description: 'We analyze your current platform contacts, deals, tags, funnels, emails, and automations. We identify what to migrate, what to clean, and what to rebuild better.' },
              { icon: <Wrench className="w-5 h-5" />, color: 'green', title: 'Data Mapping & Cleanup', description: 'We map fields from your old platform to GHL. We clean duplicate contacts, fix formatting issues, and ensure data integrity before migration.' },
              { icon: <RefreshCw className="w-5 h-5" />, color: 'yellow', title: 'Full Data Migration', description: 'We migrate contacts, deals, notes, tags, custom fields, deal stages, and history. Everything moves over exactly as it was no data loss.' },
              { icon: <Building2 className="w-5 h-5" />, color: 'blue', title: 'Funnel & Page Migration', description: 'We rebuild your funnels, landing pages, and websites inside GHL. Same design, better performance. Your customers won\'t notice the switch.' },
              { icon: <Settings className="w-5 h-5" />, color: 'green', title: 'Automation Rebuild', description: 'We rebuild your email sequences, SMS workflows, and automations in GHL. Better logic, more reliable triggers, same customer experience.' },
              { icon: <CheckCircle className="w-5 h-5" />, color: 'yellow', title: 'Post-Migration Validation', description: 'We test every contact, deal, funnel, and automation. We compare old vs new data to ensure 100% accuracy. Your new system works flawlessly.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 ${item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' :
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
                Is GHL Migration<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                If you're using multiple tools that don't work together, paying too much for your stack, or struggling with limited features moving to GoHighLevel is the answer. We make the transition seamless.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Migration makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> On ClickFunnels, Kajabi, or Leadpages and need better CRM</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Using HubSpot, Salesforce, or Zoho but paying too much</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Juggling 5+ tools that don't integrate properly</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> An agency wanting to consolidate your tech stack</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Looking for an all-in-one marketing and sales platform</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">Platforms We Migrate From</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">We've successfully migrated from 15+ platforms including ClickFunnels, Kajabi, HubSpot, Salesforce, ActiveCampaign, Infusionsoft, Zoho, Pipedrive, Keap, Ontraport, and custom spreadsheets.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">No matter where you're coming from, we have a proven migration process that gets you to GHL without disruption.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">5-10x</div>
                  <div className="text-[0.78rem] text-white/50">Cost savings vs. enterprise CRMs</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">1</div>
                  <div className="text-[0.78rem] text-white/50">Platform replaces 5+ tools</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Data preserved during migration</div>
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
              Our Migration Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Migrate Your<br />
              <span className="text-[#0E9BF0]">Business to GHL</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven 5-step process that ensures zero downtime and 100% data integrity.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Assessment', description: 'We analyze your current platform, data structure, and business processes. We identify what needs to move and create a detailed migration plan.' },
              { title: 'Data Extraction & Cleanup', description: 'We export all your data contacts, deals, notes, tags, custom fields. We clean duplicates, fix formatting, and prepare data for import.' },
              { title: 'GHL Setup & Configuration', description: 'We set up your GHL account with the right structure pipelines, tags, fields, and settings. Ready to receive your data.' },
              { title: 'Data Import & Validation', description: 'We import all your data into GHL and validate every record. We compare old vs new to ensure 100% accuracy.' },
              { title: 'Funnel & Automation Rebuild', description: 'We rebuild your funnels, email sequences, and automations. We test everything before you go live. Zero disruption to your business.' },
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
              <span className="text-[#0E9BF0]">Migration & Comparison Guides</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Learn more about migrating to GoHighLevel and comparing platforms with these in-depth articles.
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
                    <span className="text-[#0E9BF0] font-semibold">Migration & Comparison</span>
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
            Ready to Make the Switch<br />
            <span className="text-[#F8D000]">to GoHighLevel?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free migration assessment. We'll analyze your current setup, create a migration plan, and show you exactly how we'll move your business to GHL with zero downtime.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Migration Assessment →
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
              <span className="text-[#0E9BF0]">GHL Migration</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, index) => (
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
              Get the Most from Your Migration<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Start with a properly configured CRM structure that sets you up for success from day one.', href: '/services/crm-setup', icon: <Database className="w-5 h-5" /> },
              { title: 'Workflow Automation', description: 'Rebuild your automations with better logic and reliability. Your business runs smoother than ever.', href: '/services/workflow-automation', icon: <GitBranch className="w-5 h-5" /> },
              { title: 'Sales Funnel Development', description: 'Upgrade your funnels during migration with better design and higher conversion rates.', href: '/services/funnel-development', icon: <Rocket className="w-5 h-5" /> },
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
        title='Stop Paying for Multiple Tools.<br /><span class="hl-yellow">Consolidate with GHL.</span>'
        description="GoHighLevel replaces 5+ tools CRM, funnels, email, SMS, calendars, and more. Let us migrate your business seamlessly. Book your free assessment today."
        primaryText="Book Your Free Migration Assessment →"
        primaryHref="/contact-us"
      />
    </>
  );
}