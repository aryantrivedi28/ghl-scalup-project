// components/directory/ProductCard.tsx (Fixed - Redirect to detail page)
'use client';

import Link from 'next/link';
import { ExternalLink, Eye } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    logo: string;
    logoType?: 'image' | 'emoji';
    logoBg: string;
    category: string;
    description: string;
    tags: string[];
    website: string;
    isFeatured: boolean;
    isNew: boolean;
    isHot: boolean;
    hasSaaS: boolean;
    viewsCount?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const isImageLogo = product.logoType === 'image' || (product.logo && (product.logo.startsWith('http://') || product.logo.startsWith('https://')));
  const logoUrl = isImageLogo ? product.logo : null;
  const emojiLogo = !isImageLogo ? product.logo : '🚀';
  
  return (
    <div 
      className={`group bg-white rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        product.isFeatured 
          ? 'border-[#F8D000]/50 hover:border-[#F8D000]' 
          : 'border-gray-200 hover:border-[#0E9BF0]/50'
      }`}
    >
      {/* Featured strip */}
      {product.isFeatured && (
        <div className="h-0.5 w-full bg-gradient-to-r from-[#F8D000] to-transparent -mt-4 mb-3 rounded-full"></div>
      )}

      {/* Header with logo and badges */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <Link href={`/ghl-saas-directory/${product.slug}`} className="flex items-start gap-3 flex-1">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-gray-100 transition-transform group-hover:scale-105 overflow-hidden"
            style={{ background: product.logoBg }}
          >
            {isImageLogo && logoUrl ? (
              <img 
                src={logoUrl} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{emojiLogo}</span>
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#0E9BF0] transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-[#0E9BF0] font-semibold tracking-wider line-clamp-1">
              {product.category}
            </p>
          </div>
        </Link>
        
        {/* Badges */}
        <div className="flex gap-1 flex-shrink-0 flex-wrap justify-end">
          {product.isFeatured && (
            <span className="text-[10px] font-black bg-[#F8D000]/20 text-[#F8D000] px-1.5 py-0.5 rounded border border-[#F8D000]/20">
              Featured
            </span>
          )}
          {product.isNew && (
            <span className="text-[10px] font-black bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
              New
            </span>
          )}
          {product.isHot && (
            <span className="text-[10px] font-black bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">
              🔥 Hot
            </span>
          )}
          {product.hasSaaS && (
            <span className="text-[10px] font-black bg-[#0E9BF0]/10 text-[#0E9BF0] px-1.5 py-0.5 rounded">
              SaaS Mode
            </span>
          )}
        </div>
      </div>

      {/* Description - Clickable */}
      <Link href={`/ghl-saas-directory/${product.slug}`}>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {product.description}
        </p>
      </Link>

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.tags.slice(0, 3).map((tag: string, idx: number) => (
            <span key={idx} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
          {product.tags.length > 3 && (
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
              +{product.tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Footer with actions */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        {product.viewsCount !== undefined && (
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Eye className="w-3 h-3" />
            <span>{product.viewsCount}</span>
          </div>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <button 
            className="text-gray-400 hover:text-gray-600 text-xs font-medium px-2 py-1 rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://${product.website}`, '_blank');
            }}
          >
            ↗ Site
          </button>
          <Link 
            href={`/ghl-saas-directory/${product.slug}`}
            className="bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white text-xs font-semibold px-3 py-1 rounded transition-all cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}