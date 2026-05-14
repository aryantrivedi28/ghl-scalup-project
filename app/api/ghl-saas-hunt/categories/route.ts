// app/api/ghl-saas-hunt/categories/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

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

    // Count products per category
    const categoryCount: Record<string, number> = {};
    products?.forEach(product => {
      if (product.category) {
        categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
      }
    });

    // Category mapping with display names, IDs, and colors
    const categoryConfig: Record<string, { id: string; name: string; dotColor: string }> = {
      'CRM & Sales': { id: 'crm-sales', name: 'CRM & Sales', dotColor: '#A78BFA' },
      'Automation': { id: 'automation', name: 'Automation', dotColor: '#25C97D' },
      'Marketing': { id: 'marketing', name: 'Marketing', dotColor: '#F8D000' },
      'Agency Tools': { id: 'agency-tools', name: 'Agency Tools', dotColor: '#FB923C' },
      'Snapshots & Templates': { id: 'snapshots', name: 'Snapshots & Templates', dotColor: '#0E9BF0' },
      'White-Label SaaS': { id: 'white-label', name: 'White-Label SaaS', dotColor: '#F472B6' },
      'Healthcare': { id: 'healthcare', name: 'Healthcare', dotColor: '#F472B6' },
      'Real Estate': { id: 'real-estate', name: 'Real Estate', dotColor: '#A78BFA' },
      'Solar': { id: 'solar', name: 'Solar', dotColor: '#FB923C' },
      'Recruitment': { id: 'recruitment', name: 'Recruitment', dotColor: '#0E9BF0' },
      'SEO & Local': { id: 'seo-local', name: 'SEO & Local', dotColor: '#25C97D' },
      'Other': { id: 'other', name: 'Other', dotColor: '#8A9BB0' },
    };

    // Build categories array with counts
    const categories = [
      { 
        id: 'all', 
        name: 'All', 
        count: products?.length || 0, 
        dotColor: '#0E9BF0' 
      },
      ...Object.entries(categoryCount)
        .filter(([name]) => categoryConfig[name])
        .map(([name, count]) => ({
          id: categoryConfig[name].id,
          name: categoryConfig[name].name,
          count,
          dotColor: categoryConfig[name].dotColor,
        }))
        .sort((a, b) => b.count - a.count)
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