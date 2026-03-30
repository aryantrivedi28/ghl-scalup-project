// app/services/marketing/tiktok-ads/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'TikTok Ads Management Services | GHL Scale Up',
  description: 'Expert TikTok Ads management with video ads, spark ads, lead forms, and creator partnerships. Reach Gen Z and Millennial audiences. Get a free TikTok audit.',
  keywords: 'TikTok Ads management, TikTok advertising, spark ads, video ads, influencer marketing'
};

export default function TikTokAdsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services', href: '/services/marketing' }, { label: 'TikTok Ads' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Marketing Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                TikTok Ads for<br />
                <span className="text-[#F8D000]">Brand Growth</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deliver <strong className="text-white/90 font-medium">TikTok Ads management</strong> that captures attention and drives results. From video ads to spark ads to creator partnerships — we help you reach the fastest-growing audience on social media.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free TikTok Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">TikTok Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">1B+</div>
                  <div className="text-[0.78rem] text-white/50">Monthly active users</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Lower CPL than other platforms</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">2x</div>
                  <div className="text-[0.78rem] text-white/50">Higher engagement rates</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Gen Z</div>
                  <div className="text-[0.78rem] text-white/50">Primary audience reached</div>
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
              Complete TikTok Ads Management<br />
              <span className="text-[#0E9BF0]">for Brand Awareness & Sales</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              We manage every aspect of your TikTok advertising — from creative strategy to campaign optimization to audience targeting.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🎬', color: 'blue', title: 'Video Ad Production', description: 'Short-form video ads optimized for TikTok\'s native style. Hook-driven content that stops the scroll and captures attention in the first 3 seconds.' },
              { icon: '✨', color: 'green', title: 'Spark Ads', description: 'Promote organic content that\'s already performing well. Turn viral videos into paid ads with native placement and authentic engagement.' },
              { icon: '📋', color: 'yellow', title: 'Lead Generation Forms', description: 'Native lead forms that capture user information without leaving TikTok. High conversion rates with frictionless user experience.' },
              { icon: '🤝', color: 'blue', title: 'Creator Partnerships', description: 'Connect with TikTok creators and influencers who align with your brand. Authentic content that builds trust and drives conversions.' },
              { icon: '🎯', color: 'green', title: 'Audience Targeting', description: 'Interest-based targeting, lookalike audiences, and custom audiences based on engagement and video views. Find your ideal customers.' },
              { icon: '📊', color: 'yellow', title: 'Performance Analytics', description: 'Track views, engagement, click-through rates, conversions, and cost per result. Data-driven optimization for continuous improvement.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 ${
                  item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 
                  item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
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
                Is TikTok Ads Right for<br />
                <span className="text-[#0E9BF0]">Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                TikTok has 1+ billion monthly active users, with the highest engagement rates of any social platform. If your target audience includes Gen Z, Millennials, or even Gen X, TikTok offers unparalleled reach and attention.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">TikTok Ads make sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A B2C brand targeting Gen Z or Millennial consumers</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An ecommerce business with visually appealing products</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A mobile app looking for installs and engagement</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A brand that can create authentic, entertaining video content</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Looking to reach new audiences with lower acquisition costs</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The TikTok Opportunity</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">TikTok users spend an average of 95 minutes per day on the platform — more than any other social network. Advertisers are seeing CPLs 30% lower than Facebook, with higher engagement and brand recall.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our TikTok Ads management helps you create content that resonates, target the right audiences, and scale what works — capturing attention where your competitors aren't yet advertising.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">95min</div>
                  <div className="text-[0.78rem] text-white/50">Average daily time spent</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Lower CPL vs. other platforms</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">1B+</div>
                  <div className="text-[0.78rem] text-white/50">Monthly active users</div>
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
              Our TikTok Ads Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Capture<br />
              <span className="text-[#0E9BF0]">Attention on TikTok</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven process for creating viral-worthy content that drives results.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Creative Strategy & Research', description: 'We analyze trending content, competitor ads, and audience preferences. We identify video formats, hooks, and angles that resonate with your target audience on TikTok.' },
              { title: 'Video Production', description: 'We create short-form video ads optimized for TikTok\'s algorithm. Fast-paced, hook-driven content designed to stop the scroll in the first 3 seconds.' },
              { title: 'Campaign Setup & Targeting', description: 'We set up TikTok Ads Manager with proper tracking, pixel implementation, and audience targeting. Interest-based, behavioral, and lookalike audiences.' },
              { title: 'Launch & Testing', description: 'We launch campaigns and test multiple creative variations, targeting options, and bidding strategies. Data-driven optimization to find what works.' },
              { title: 'Scale & Optimization', description: 'We scale successful campaigns, expand into new audiences, and continuously test new creative. Weekly reporting on performance metrics.' },
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

      {/* CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Reach<br />
            <span className="text-[#F8D000]">1 Billion+ Users?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free TikTok Ads audit. We'll analyze your brand fit for the platform, identify creative opportunities, and show you how to capture attention on TikTok.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free TikTok Audit →
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
              <span className="text-[#0E9BF0]">TikTok Ads</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What kind of content works best on TikTok?', a: 'Authentic, entertaining content that doesn\'t feel like an ad. Educational videos, behind-the-scenes, user-generated content, and trend-based videos perform best. We help you create content that fits TikTok\'s native style.' },
              { q: 'How much budget do I need to start?', a: 'We recommend starting with $1,500-3,000 per month for TikTok Ads. The platform requires testing multiple creative variations to find what works, so adequate budget is important for effective testing.' },
              { q: 'What industries perform well on TikTok?', a: 'Ecommerce, beauty, fashion, fitness, food & beverage, entertainment, apps, gaming, and lifestyle brands perform exceptionally well. B2B can work with creative approaches.' },
              { q: 'What are Spark Ads?', a: 'Spark Ads let you promote organic content from your own account or creator partners. These ads look native and often perform better than traditional ad formats because they feel authentic.' },
              { q: 'How do you measure success on TikTok?', a: 'We track views, engagement rate, click-through rate, cost per lead, conversion rate, and ROAS. Success metrics aligned with your specific business goals — brand awareness, lead generation, or sales.' },
              { q: 'Do I need to be on TikTok organically first?', a: 'Not necessarily. While organic content can help, we can launch paid campaigns without existing organic presence. We can create original ad content or leverage creator partnerships.' },
              { q: 'How long does it take to see results?', a: 'Initial results within 2-3 weeks. TikTok\'s algorithm learns quickly. Optimal performance typically achieved after 4-6 weeks of consistent testing and optimization.' },
              { q: 'What\'s the minimum ad spend?', a: 'TikTok requires a minimum of $50/day per ad group for optimal learning. We help structure campaigns to meet these requirements while staying within your overall budget.' },
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
              Related Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Maximize Your TikTok Ads Results<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Video Editing & Production', description: 'Professional short-form video ads optimized for TikTok\'s native format and algorithm.', href: '/services/marketing/video-editing' },
              { title: 'Content Creation & Copywriting', description: 'Scripts and captions that hook viewers and drive action within the first 3 seconds.', href: '/services/marketing/content-copywriting' },
              { title: 'Lead Generation Systems', description: 'Capture and convert TikTok traffic with optimized funnels that continue the conversation.', href: '/services/marketing/lead-generation' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand 
        title="Stop Ignoring the Fastest-Growing Platform.<br /><span class='hl-yellow'>Start Capturing Attention on TikTok.</span>"
        description="TikTok users spend 95 minutes per day on the platform. Book your free audit and discover how to turn that attention into leads and sales."
        primaryText="Book Your Free TikTok Audit →"
        primaryHref="/contact"
      />
    </>
  );
}