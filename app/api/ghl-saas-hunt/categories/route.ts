// app/api/ghl-saas-hunt/categories/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// Predefined categories list
const PREDEFINED_CATEGORIES = [
  'CRM & Sales',
  'Automation',
  'Marketing',
  'Agency Tools',
  'Snapshots & Templates',
  'White-Label SaaS',
  'Healthcare',
  'Real Estate',
  'Solar',
  'Recruitment',
  'SEO & Local',
];

// Category colors mapping
const CATEGORY_COLORS: Record<string, { id: string; dotColor: string }> = {
  'CRM & Sales': { id: 'crm-sales', dotColor: '#A78BFA' },
  'Automation': { id: 'automation', dotColor: '#25C97D' },
  'Marketing': { id: 'marketing', dotColor: '#F8D000' },
  'Agency Tools': { id: 'agency-tools', dotColor: '#FB923C' },
  'Snapshots & Templates': { id: 'snapshots', dotColor: '#0E9BF0' },
  'White-Label SaaS': { id: 'white-label', dotColor: '#F472B6' },
  'Healthcare': { id: 'healthcare', dotColor: '#F472B6' },
  'Real Estate': { id: 'real-estate', dotColor: '#A78BFA' },
  'Solar': { id: 'solar', dotColor: '#FB923C' },
  'Recruitment': { id: 'recruitment', dotColor: '#0E9BF0' },
  'SEO & Local': { id: 'seo-local', dotColor: '#25C97D' },
};

export async function GET(request: NextRequest) {
  try {
    // Get all published products
    const { data: products, error } = await supabase
      .from('gsu_products')
      .select('category')
      .eq('status', 'published');

    if (error) {
      console.error('Categories fetch error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch categories' },
        { status: 500 }
      );
    }

    // Count products for predefined categories and track others
    const categoryCount: Record<string, number> = {};
    let otherCount = 0;

    products?.forEach(product => {
      const category = product.category;
      
      if (PREDEFINED_CATEGORIES.includes(category)) {
        // Count for predefined categories
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      } else {
        // Count for "Other" category (custom categories)
        otherCount++;
      }
    });

    // Build categories array
    const categories = [
      { 
        id: 'all', 
        name: 'All', 
        count: products?.length || 0, 
        dotColor: '#0E9BF0' 
      },
      // Add predefined categories that have products
      ...PREDEFINED_CATEGORIES
        .filter(cat => categoryCount[cat] > 0)
        .map(cat => ({
          id: CATEGORY_COLORS[cat]?.id || cat.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          name: cat,
          count: categoryCount[cat],
          dotColor: CATEGORY_COLORS[cat]?.dotColor || '#8A9BB0',
        })),
      // Add "Other" category if there are custom categories
      ...(otherCount > 0 ? [{
        id: 'other',
        name: 'Other',
        count: otherCount,
        dotColor: '#8A9BB0',
      }] : []),
    ];

    return NextResponse.json({
      success: true,
      data: categories,
    });

  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}