// app/services/marketing/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'Marketing Services | GHL Scale Up',
  description: 'Complete marketing services including SEO, Google Ads, Meta Ads, TikTok Ads, social media management, content creation, and more. Data-driven marketing that delivers ROI.',
  keywords: 'marketing services, digital marketing, SEO services, PPC management, social media marketing, content marketing'
};

export default function MarketingServicesPage() {
  const marketingServices = [
    {
      category: 'Paid Advertising',
      icon: '📢',
      description: 'Drive targeted traffic and generate leads with data-driven ad campaigns',
      services: [
        { icon: '🔍', title: 'Google Ads Management', description: 'Search, Shopping, PMax, and remarketing campaigns.', link: '/marketing/google-ads', popular: true },
        { icon: '📱', title: 'Meta Ads (Facebook & Instagram)', description: 'Lead generation, retargeting, and creative testing.', link: '/marketing/meta-ads', popular: true },
        { icon: '🎵', title: 'TikTok Ads', description: 'Video ads, spark ads, and creator partnerships.', link: '/marketing/tiktok-ads' },
      ]
    },
    {
      category: 'Organic Growth',
      icon: '🌱',
      description: 'Build sustainable traffic and authority with organic strategies',
      services: [
        { icon: '🔍', title: 'SEO Services', description: 'Technical SEO, on-page optimization, link building, local SEO.', link: '/marketing/seo', popular: true },
        { icon: '📲', title: 'Social Media Management', description: 'Content calendars, posting, and community engagement.', link: '/marketing/social-media-management' },
        { icon: '✏️', title: 'Content Creation & Copywriting', description: 'Blogs, ad copy, email sequences, website copy.', link: '/marketing/content-copywriting' },
      ]
    },
    {
      category: 'Creative & Production',
      icon: '🎨',
      description: 'Professional creative assets that capture attention',
      services: [
        { icon: '🎬', title: 'Video Editing & Production', description: 'Reels, YouTube, ad creative, UGC editing.', link: '/marketing/video-editing' },
        { icon: '🎨', title: 'Graphic Design', description: 'Social graphics, ads, presentations, brand collateral.', link: '/marketing/graphic-design' },
        { icon: '🏷️', title: 'Brand Building & Strategy', description: 'Brand strategy, messaging, visual identity.', link: '/marketing/brand-building' },
      ]
    },
    {
      category: 'Automation & Technology',
      icon: '🤖',
      description: 'Leverage AI and automation to scale your marketing',
      services: [
        { icon: '🤖', title: 'AI Marketing Automation', description: 'Predictive scoring, AI content, chatbot marketing.', link: '/marketing/ai-marketing-automation' },
        { icon: '🎯', title: 'Lead Generation Systems', description: 'Complete funnel: traffic to booked call.', link: '/marketing/lead-generation', popular: true },
        { icon: '💌', title: 'Email Marketing', description: 'List building, segmentation, drip campaigns, newsletters.', link: '/marketing/email-marketing' },
      ]
    }
  ];

  const stats = [
    { value: '200+', label: 'Marketing Projects' },
    { value: '11.5x', label: 'Highest ROAS' },
    { value: '50+', label: 'Active Clients' },
    { value: '35%', label: 'Avg Email Open Rate' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Marketing Services
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem]] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
              Data-Driven Marketing<br />
              <span className="text-[#F8D000]">That Delivers ROI</span>
            </h1>
            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-2xl mx-auto">
              From paid advertising to organic growth, content creation to AI automation — we provide complete marketing services that drive real business results. 200+ projects delivered across 6 countries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-[#F8D000]">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {marketingServices.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 md:py-20 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-[#F4F7FA]'}`}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgba(14,155,240,0.1)] text-3xl mb-4">
                {category.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-3">
                {category.category}
              </h2>
              <p className="text-[0.9rem] text-[#4A5568] max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 hover:border-[#0E9BF0] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[rgba(14,155,240,0.2)] transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors">
                          {service.title}
                        </h3>
                        {service.popular && (
                          <span className="text-[0.6rem] font-bold bg-[#F8D000] text-[#0B1421] px-2 py-0.5 rounded-full">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-[0.8rem] text-[#4A5568] leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Why Choose Us
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              Marketing That's Connected<br />
              <span className="text-[#0E9BF0]">to Your Business Goals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-2xl mx-auto mb-4">
                📊
              </div>
              <h3 className="text-lg font-bold text-[#1C2E4A] mb-2">Data-Driven Decisions</h3>
              <p className="text-[0.85rem] text-[#4A5568]">Every campaign optimized based on performance data — not guesses. We track what works and scale it.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(37,201,125,0.1)] flex items-center justify-center text-2xl mx-auto mb-4">
                🔗
              </div>
              <h3 className="text-lg font-bold text-[#1C2E4A] mb-2">Connected to CRM</h3>
              <p className="text-[0.85rem] text-[#4A5568]">Every lead tracked from click to close. Full attribution across all marketing channels.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(248,208,0,0.12)] flex items-center justify-center text-2xl mx-auto mb-4">
                📈
              </div>
              <h3 className="text-lg font-bold text-[#1C2E4A] mb-2">Proven Results</h3>
              <p className="text-[0.85rem] text-[#4A5568]">11.5x ROAS, 70% reduction in manual workload, 35% average email open rate. Real results for real businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Simple Process
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2E4A] mb-4">
              How We Work<br />
              <span className="text-[#0E9BF0]">With You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand goals & audience' },
              { step: '02', title: 'Strategy', desc: 'Data-driven plan & KPIs' },
              { step: '03', title: 'Execution', desc: 'Launch & manage campaigns' },
              { step: '04', title: 'Optimize', desc: 'Test, learn, improve' },
              { step: '05', title: 'Report', desc: 'Clear ROI metrics' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1C2E4A] text-[#F8D000] flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-[#1C2E4A] mb-1">{item.title}</h3>
                <p className="text-[0.7rem] text-[#4A5568]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4">
            Ready to Scale Your Marketing?<br />
            <span className="text-[#F8D000]">Let's Talk About Your Goals.</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-8 leading-relaxed">
            Book a free marketing consultation. We'll analyze your current efforts, identify opportunities, and create a custom strategy to achieve your goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3 rounded-lg text-[0.9rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all">
              Book Your Free Marketing Consultation →
            </Link>
            <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-8 py-3 rounded-lg text-[0.9rem] font-medium border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all">
              Or Email Us Directly
            </Link>
          </div>
        </div>
      </div>

      <CtaBand 
        title="Not Sure Which Service You Need?<br /><span class='hl-yellow'>Let's Figure It Out Together.</span>"
        description="We'll help you identify the right marketing services to achieve your business goals. Book a free consultation today."
        primaryText="Book Your Free Marketing Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}