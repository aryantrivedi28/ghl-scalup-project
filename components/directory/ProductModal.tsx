// components/directory/ProductModal.tsx
'use client';

import { useRouter } from 'next/navigation';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    logo: string;
    logoBg: string;
    category: string;
    description: string;
    tags: string[];
    website: string;
  } | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const router = useRouter();

  if (!product) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-space-blue-dark border border-nurture-blue/20 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-nurture-blue/10 to-transparent p-5 border-b border-white/10">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border border-white/10 flex-shrink-0"
            >
              {product.logo}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{product.name}</h2>
              <p className="text-xs text-nurture-blue font-semibold tracking-wider mt-0.5">{product.category}</p>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mt-3">{product.description}</p>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Tags Section */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-white/40 uppercase mb-2">
              <span>Tags</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/5 border border-white/10 text-white/60 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Website Section */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-white/40 uppercase mb-2">
              <span>Website</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div
              onClick={() => window.open(`https://${product.website}`, '_blank')}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:border-nurture-blue/30 transition-colors group"
            >
              <span className="text-sm text-white group-hover:text-nurture-blue transition-colors">
                Visit {product.website} →
              </span>
              <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-nurture-blue transition-colors" />
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-nurture-blue/10 to-close-green/5 border border-nurture-blue/20 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-white">Want a SaaS like this?</h4>
                <p className="text-xs text-white/40">
                  GHL Scale Up builds & launches your GHL SaaS in 14 days.
                </p>
              </div>
              <Button
                variant="accent"
                size="sm"
                onClick={() => {
                  onClose();
                  router.push('/ghl-saas-directory/submit');
                }}
              >
                Book a Free Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}