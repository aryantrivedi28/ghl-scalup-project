// app/blog/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Blog — GoHighLevel Tips & Marketing Insights | GHL Scale Up',
  description: 'Practical GHL guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.',
  keywords: 'GoHighLevel blog, GHL guides, automation tips, SaaS strategies, marketing insights',
};

const blogPosts = [
   {
    icon: '🚀',
    tag: 'GHL SaaS',
    title: 'How to Set Up GoHighLevel White-Label SaaS: Complete Guide',
    excerpt: 'Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies.',
    slug: 'ghl-white-label-saas-guide',
    date: 'April 7, 2026',
    readTime: '8 min read',
    featured: true,
   },
  // {
  //   icon: '🧠',
  //   tag: 'AI',
  //   title: 'GHL AI Workflows to Respond to Leads in Under 10 Seconds',
  //   excerpt: 'Build an AI-powered lead response system that qualifies, books, and follows up.',
  //   slug: 'ghl-ai-workflows-lead-response',
  //   date: 'April 1, 2026',
  //   readTime: '6 min read',
  //   featured: true,
  // },
  // {
  //   icon: '💰',
  //   tag: 'Business',
  //   title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue',
  //   excerpt: 'Transition from one-off projects to a scalable SaaS business using GHL white-label.',
  //   slug: 'freelancer-to-ghl-saas-founder',
  //   date: 'March 25, 2026',
  //   readTime: '7 min read',
  //   featured: false,
  // },
  {
    icon: '⚙️',
    tag: 'Automation',
    title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster',
    excerpt: 'Discover the GoHighLevel funnel builder features most agencies overlook — version control, global sections, custom values, real-time collaboration and more.',
    slug: 'gohighlevel-funnel-builder-features',
    date: 'April 7, 2026',
    readTime: '9 min read',
    featured: true,
  },
  // {
  //   icon: '📊',
  //   tag: 'Marketing',
  //   title: 'How to Generate High-Quality Leads Using GHL',
  //   excerpt: 'Learn the proven strategies to attract, capture, and convert leads using GoHighLevel automation.',
  //   slug: 'ghl-lead-generation-strategies',
  //   date: 'March 20, 2026',
  //   readTime: '6 min read',
  //   featured: false,
  // },
  // {
  //   icon: '🎯',
  //   tag: 'Strategy',
  //   title: 'GHL Pipeline Management: From Lead to Closed Deal',
  //   excerpt: 'Master the art of pipeline management in GoHighLevel to track and convert more leads.',
  //   slug: 'ghl-pipeline-management',
  //   date: 'March 15, 2026',
  //   readTime: '7 min read',
  //   featured: false,
  // },
];

const getCategoryColor = (tag: string) => {
  const colors: Record<string, string> = {
    'GHL SaaS': 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]',
    'AI': 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]',
    'Business': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]',
    'Automation': 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]',
    'Marketing': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]',
    'Strategy': 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]',
  };
  return colors[tag] || 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]';
};

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />
      
      {/* Blog Header */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Blog
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4">
              GHL Insights &amp;<br />
              <span className="text-[#F8D000]">Marketing Guides</span>
            </h1>
            <p className="text-white/60 text-base max-w-[580px] mx-auto">
              Practical GoHighLevel guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1C2E4A]">Featured Articles</h2>
              <p className="text-[#4A5568] mt-2">Hand-picked insights to help you master GoHighLevel</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Link 
                  key={index} 
                  href={`/blog/${post.slug}`}
                  className="group relative bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className={`inline-block text-[0.6rem] font-bold px-2 py-1 rounded-full mb-4 ${getCategoryColor(post.tag)}`}>
                      {post.tag}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#F8D000] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-[#F8D000] text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1C2E4A]">Latest Articles</h2>
            <p className="text-[#4A5568] mt-2">Stay updated with our latest guides and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link 
                key={index} 
                href={`/blog/${post.slug}`}
                className="group bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-[200px] bg-gradient-to-br from-[#F4F7FA] to-[#E8EDF4] flex items-center justify-center text-5xl relative">
                  {post.icon}
                  <div className={`absolute top-3 left-3 text-[0.6rem] font-bold px-2 py-1 rounded-full ${getCategoryColor(post.tag)}`}>
                    {post.tag}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-[0.65rem] text-[#8A9BB0] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#1C2E4A] leading-tight mb-2 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[0.8rem] text-[#4A5568] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Stay Updated
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A]">
              Get GHL Tips Delivered<br />
              <span className="text-[#0E9BF0]">Straight to Your Inbox</span>
            </h2>
            <p className="text-[0.88rem] text-[#4A5568] leading-relaxed mb-6">
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
            
            <p className="text-[0.7rem] text-[#8A9BB0] mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
