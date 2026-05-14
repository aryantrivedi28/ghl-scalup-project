// app/ghl-saas-directory/page.tsx (Updated with API integration)
'use client';

import { useState, useEffect } from 'react';
import { Search, ExternalLink, X, Loader2 } from 'lucide-react';
import Link from 'next/link';
import ProductModal from '@/components/directory/ProductModal';
import ProductCard from '@/components/directory/ProductCard';

interface Product {
  id: string;
  name: string;
  slug: string;
  logo: string;
  logoBg: string;
  category: string;
  description: string;
  tags: string[];
  website: string;
  isFeatured: boolean;
  isNew: boolean;
  isHot: boolean;
  hasSaaS: boolean;
  viewsCount: number;
}

interface Category {
  id: string;
  name: string;
  count: number;
  dotColor: string;
}

export default function GHLSaaSDirectory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [stats, setStats] = useState({ totalProducts: 0, totalCategories: 0, monthlyVisitors: 0 });
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
    fetchStats();
  }, []);

  // Fetch products when filters change
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchTerm, sortBy, page]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/ghl-saas-hunt/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/ghl-saas-hunt/stats');
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      if (searchTerm) params.append('search', searchTerm);
      if (sortBy) params.append('sort', sortBy);
      params.append('page', page.toString());
      params.append('limit', '12');

      const response = await fetch(`/api/ghl-saas-hunt/products?${params.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data.products);
        setTotalPages(data.data.totalPages);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchProducts();
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Dark Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C2E4A] via-[#1C2E4A] to-[#0B1421]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_-5%,rgba(14,155,240,0.18)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_80%_90%,rgba(37,201,125,0.10)_0%,transparent_55%),radial-gradient(ellipse_40%_50%_at_15%_80%,rgba(248,208,0,0.07)_0%,transparent_55%)] pointer-events-none"></div>
        
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-16 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.28)] rounded-full px-3 py-1 text-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F8D000] animate-pulse"></div>
            <span className="text-[#F8D000] text-xs font-semibold tracking-wider">GoHighLevel Ecosystem</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="text-white">Discover the Best</span>
            <br />
            <span className="text-[#F8D000]">GHL-Powered</span>
            <br />
            <span className="text-[#0E9BF0]">SaaS Products</span>
          </h1>
          <p className="text-white/50 max-w-md mx-auto text-sm md:text-base font-light leading-relaxed mb-8">
            Browse {stats.totalProducts}+ SaaS businesses, CRM tools, automation systems and snapshots built on GoHighLevel.
          </p>
          <div className="flex justify-center gap-8 md:gap-12">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#F8D000]">{stats.totalProducts}</div>
              <div className="text-xs text-white/40 font-semibold tracking-wider">Products Listed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#F8D000]">{stats.totalCategories}</div>
              <div className="text-xs text-white/40 font-semibold tracking-wider">Categories</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#F8D000]">{stats.monthlyVisitors}</div>
              <div className="text-xs text-white/40 font-semibold tracking-wider">Monthly Visitors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-3 md:py-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex rounded-xl overflow-hidden border border-gray-200 bg-white focus-within:border-[#0E9BF0] focus-within:ring-2 focus-within:ring-[#0E9BF0]/20 transition-all">
              <div className="flex-1 flex items-center">
                <div className="pl-3 text-gray-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search SaaS products, tools, automation systems…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent border-none px-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <div className="w-px bg-gray-200"></div>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="bg-transparent border-none text-[#0E9BF0] text-sm font-semibold px-4 py-2.5 focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-white">All Categories</option>
                {categories.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id} className="bg-white">{cat.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold px-6 py-2.5 rounded-xl transition-all whitespace-nowrap shadow-sm">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <h3 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3 pb-2 border-b border-gray-100">
                  Category
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-[#0E9BF0]/10 text-[#0E9BF0]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ background: cat.dotColor }}
                        ></div>
                        <span className="text-sm">{cat.name}</span>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="bg-gradient-to-br from-[#0E9BF0]/5 to-[#25C97D]/5 border border-[#0E9BF0]/20 rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Build Your GHL SaaS</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  We build, configure & launch your GHL SaaS in 14 days. You sell. We handle everything.
                </p>
                <Link 
                  href="/ghl-saas-directory/submit"
                  className="w-full bg-[#F8D000] hover:bg-[#FFE44D] text-gray-900 font-bold py-2 rounded-lg text-xs transition-all block text-center"
                >
                  List Your SaaS →
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Side - Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
              <div>
                <h2 className="text-lg font-bold text-gray-900">GHL SaaS Products</h2>
                <p className="text-sm text-gray-500">
                  Showing <span className="text-[#0E9BF0] font-semibold">{products.length}</span> products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-[#0E9BF0] cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="featured">Featured</option>
                  <option value="most-viewed">Most Viewed</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-[#0E9BF0]" />
              </div>
            )}

            {/* Products Grid */}
            {!loading && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                    />
                  ))}
                </div>

                {/* Empty State */}
                {products.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-gray-500">No products found matching your criteria.</p>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-8">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-3 py-1 border border-gray-200 rounded-lg text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <span className="px-3 py-1 text-gray-600">
                      Page {page} of {totalPages}
                    </span>
                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="px-3 py-1 border border-gray-200 rounded-lg text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Bottom Submit CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-3">Don't see your product?</p>
              <Link 
                href="/ghl-saas-directory/submit"
                className="inline-block bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg text-sm font-semibold transition-all"
              >
                List Your SaaS →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
