// app/blog/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Blog — GoHighLevel Tips & Marketing Insights | GHL Scale Up',
  description: 'Practical GHL guides, automation tips, SaaS strategies, and marketing insights.'
};

const posts = [
  {
    icon: '⚙️',
    tag: 'GHL SaaS',
    title: 'How to Set Up GoHighLevel White-Label SaaS: Complete Guide',
    excerpt: 'Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies.',
    link: '/blog/ghl-white-label-saas-guide'
  },
  {
    icon: '🧠',
    tag: 'AI',
    title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds',
    excerpt: 'Build an AI-powered lead response system that qualifies, books, and follows up.',
    link: '/blog/ghl-ai-workflows-lead-response'
  },
  {
    icon: '💰',
    tag: 'Business',
    title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue',
    excerpt: 'Transition from one-off projects to a scalable SaaS business using GHL white-label.',
    link: '/blog/freelancer-to-ghl-saas-founder'
  }
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />
      
      {/* Blog Header */}
      <section className="py-16 md:py-20 bg-white" style={{ paddingTop: '60px' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Blog
            </div>
            <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
              GHL Insights &amp;<br />
              <span className="text-[#0E9BF0]">Marketing Guides</span>
            </h1>
            <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Practical GoHighLevel guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link 
                key={index} 
                href={post.link}
                className="group bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-[200px] bg-gradient-to-br from-[#F4F7FA] to-[#E8EDF4] flex items-center justify-center text-5xl">
                  {post.icon}
                </div>
                <div className="p-6">
                  <div className="inline-block text-[0.62rem] font-bold tracking-[0.1em] uppercase text-[#0E9BF0] mb-3">
                    {post.tag}
                  </div>
                  <h3 className="text-[1rem] md:text-[1.1rem] font-bold text-[#1C2E4A] leading-tight mb-2 group-hover:text-[#0E9BF0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-10">
            <p className="text-[0.88rem] text-[#4A5568]">
              More coming soon.{' '}
              <Link 
                href="/contact" 
                className="text-[#0E9BF0] font-semibold hover:text-[#1C2E4A] transition-colors inline-flex items-center gap-1"
              >
                Subscribe →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Optional: Newsletter CTA Section */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Stay Updated
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A]">
              Get GHL Tips Delivered<br />
              <span className="text-[#0E9BF0]">Straight to Your Inbox</span>
            </h2>
            <p className="text-[0.88rem] font-light text-[#4A5568] leading-relaxed mb-6">
              Subscribe to our newsletter and get the latest GoHighLevel guides, automation strategies, and growth insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-[#E8EDF4] bg-white text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
              />
              <button 
                type="submit"
                className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}