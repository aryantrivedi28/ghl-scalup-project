'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { 
  ArrowRight,
  Mail,
  Clock,
  Calendar,
  Star,
  CheckCircle,
  XCircle,
  Search,
  X
} from 'lucide-react';
import { blogPosts, getIconComponent } from '@/data/blogPosts';

export default function BlogClient() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter blogs based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return blogPosts;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tag.toLowerCase().includes(query) ||
      post.slug.toLowerCase().includes(query)
    );
  }, [searchQuery]);
  
  // Newsletter State
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox for confirmation.');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const getCategoryColor = (tag: string) => {
    const colors: Record<string, string> = {
      'Migration': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Real Estate': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'White Label SaaS': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Agency': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'White Label': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Review': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Comparison': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Pricing': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Conversation AI': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Hire Guide': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      '★ Recommended': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Snapshot': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'SMS Automation': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Workflow': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'GoHighLevel': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Sub-Account': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Migration Timeline': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Coaches': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Dental': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Beginner': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'Tool Consolidation': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'SaaS Mode': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Checklist': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'SaaS': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Home Services': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'AI': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'A2P 10DLC': 'bg-[rgba(248,208,0,0.12)] text-[#F8D000] border-[rgba(248,208,0,0.2)]',
      'Tutorial': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'Features': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
      'Nonprofits': 'bg-[rgba(220,53,69,0.12)] text-[#DC3545] border-[rgba(220,53,69,0.2)]',
      'India Agency': 'bg-[rgba(255,153,51,0.12)] text-[#FF9933] border-[rgba(255,153,51,0.2)]',
      'Migration Guide': 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]',
      'SaaS Growth': 'bg-[rgba(37,201,125,0.12)] text-[#25C97D] border-[rgba(37,201,125,0.2)]',
    };
    return colors[tag] || 'bg-[rgba(14,155,240,0.12)] text-[#0E9BF0] border-[rgba(14,155,240,0.2)]';
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />
      
      {/* Blog Header */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(14,155,240,0.15),transparent)] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0E9BF0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F8D000]/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Star className="w-3 h-3 fill-[#F8D000]" />
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-5">
              GHL Insights &amp;<br />
              <span className="text-[#F8D000] relative inline-block">
                Marketing Guides
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 300 4" preserveAspectRatio="none">
                  <path d="M0 2 Q75 0 150 2 Q225 4 300 2" stroke="#F8D000" strokeWidth="2" fill="none" opacity="0.5"/>
                </svg>
              </span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-[580px] mx-auto leading-relaxed">
              Practical GoHighLevel guides, automation tips, SaaS strategies, and marketing insights to help you scale your business.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white border-b border-[#E8EDF4] py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1b1e22]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, topic, or keyword..."
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#8b8989] bg-white text-[#0b0e16] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all text-base"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#F8F9FB] transition-colors"
                >
                  <X className="w-4 h-4 text-[#8A9BB0]" />
                </button>
              )}
            </div>
            
            {/* Search Results Count */}
            {searchQuery && (
              <div className="mt-3 text-center">
                <p className="text-sm text-[#5C6880]">
                  Found <span className="font-semibold text-[#0E9BF0]">{filteredPosts.length}</span> result{filteredPosts.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Posts Section - Only show if no search query */}
      {!searchQuery && featuredPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#0E9BF0]" />
                <Star className="w-4 h-4 text-[#F8D000] fill-[#F8D000]" />
                <div className="w-8 h-px bg-[#0E9BF0]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-3">Featured Articles</h2>
              <p className="text-[#4A5568]">Hand-picked insights to help you master GoHighLevel</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => {
                const IconComponent = getIconComponent(post.icon);
                return (
                  <Link 
                    key={index} 
                    href={`/blog/${post.slug}`}
                    className="group relative bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E4A] via-[#1C2E4A]/60 to-transparent" />
                    </div>
                    
                    <div className="relative p-8 md:p-10 z-10 min-h-[320px] flex flex-col justify-end">
                      <div className={`inline-flex items-center gap-1.5 text-[0.6rem] font-bold px-3 py-1 rounded-full mb-4 border backdrop-blur-sm w-fit ${getCategoryColor(post.tag)}`}>
                        {post.tag}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#F8D000] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-white/40">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-2 text-[#F8D000] text-sm font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts Grid */}
      <section className="py-16 md:py-20 bg-[#F8F9FB]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111c2d] mb-3">
              {searchQuery ? 'Search Results' : 'Latest Articles'}
            </h2>
            <p className="text-[#4A5568]">
              {searchQuery 
                ? `Showing articles matching "${searchQuery}"`
                : 'Stay updated with our latest guides and insights'
              }
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const IconComponent = getIconComponent(post.icon);
                return (
                  <Link 
                    key={index} 
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8EDF4]"
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F4F7FA] to-[#E8EDF4]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#0E9BF0]" />
                      </div>
                      
                      <div className={`absolute top-4 left-4 text-[0.6rem] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${getCategoryColor(post.tag)}`}>
                        {post.tag}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[0.65rem] text-[#8A9BB0] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#1C2E4A] leading-tight mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl p-8 max-w-md mx-auto border border-[#E8EDF4]">
                <Search className="w-12 h-12 text-[#8A9BB0] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1A2236] mb-2">No results found</h3>
                <p className="text-[#5C6880] mb-4">
                  We couldn't find any articles matching "{searchQuery}".
                </p>
                <button
                  onClick={handleClearSearch}
                  className="inline-flex items-center gap-2 bg-[#0E9BF0] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0c8be0] transition-all"
                >
                  Clear Search
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section - Only show if no search query */}
      {!searchQuery && (
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1C2E4A] to-[#111E30] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(14,155,240,0.1),transparent)] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0E9BF0]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F8D000]/5 rounded-full blur-3xl" />
          
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-[700px] mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-4 justify-center bg-[rgba(14,155,240,0.1)] px-4 py-1.5 rounded-full">
                <Mail className="w-3 h-3" />
                Stay Updated
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-white">
                Get GHL Tips Delivered<br />
                <span className="text-[#F8D000]">Straight to Your Inbox</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
                Subscribe to our newsletter and get the latest GoHighLevel guides, automation strategies, and growth insights.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    disabled={status === 'loading'}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all disabled:opacity-50"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-xl font-bold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              
              {status === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl inline-flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  {message}
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl inline-flex items-center gap-2 text-sm text-red-400">
                  <XCircle className="w-4 h-4" />
                  {message}
                </div>
              )}
              
              <p className="text-white/40 text-xs mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}