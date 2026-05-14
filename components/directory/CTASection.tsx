// components/directory/CTASection.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  variant?: 'banner' | 'sidebar' | 'inline' | 'compact';
  title?: string;
  description?: string;
}

export default function CTASection({ 
  variant = 'banner',
  title = "Want to build or improve your own GHL SaaS?",
  description = "Get a free GHL SaaS audit from GHL Scale Up. Our experts will review your setup, identify gaps, and provide a clear action plan."
}: CTASectionProps) {
  
  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-capture-yellow to-yellow-lt rounded-xl p-5 text-space-deep">
        <Building2 className="w-8 h-8 mb-3" />
        <h4 className="font-bold text-base mb-1">Build Your GHL SaaS?</h4>
        <p className="text-sm text-space-deep/70 mb-4">Get a free audit from GHL Scale Up</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-space-deep text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-space-blue transition-colors w-full justify-center">
          Get Free Audit
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-nurture-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-nurture-blue/90 transition-all"
      >
        Get Free GHL SaaS Audit
        <ArrowRight className="w-4 h-4" />
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-space-blue rounded-xl p-6 text-white text-center">
        <Sparkles className="w-10 h-10 mx-auto mb-3 text-capture-yellow" />
        <h3 className="text-lg font-bold mb-2">Free GHL SaaS Audit</h3>
        <p className="text-white/70 text-sm mb-4">Get a complete review of your GHL setup</p>
        <Button variant="accent" size="sm" asChild>
          Claim Audit
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  // Default banner variant
  return (
    <div className="bg-gradient-to-r from-nurture-blue to-space-blue rounded-2xl p-8 md:p-10 text-white text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-sm mb-4">
        <Sparkles className="w-4 h-4 text-capture-yellow" />
        <span>Limited Time Offer</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        {title}
      </h2>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/contact">
          <Button variant="accent" size="lg">
            Claim Your Free Audit
            <Calendar className="w-4 h-4" />
          </Button>
        </Link>
        <Link href="/ghl-saas-directory/submit">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Submit Your SaaS
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}