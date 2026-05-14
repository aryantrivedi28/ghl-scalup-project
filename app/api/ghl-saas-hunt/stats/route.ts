// app/api/ghl-saas-hunt/stats/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: NextRequest) {
  try {
    // Get total published products
    const { count: totalProducts, error: productsError } = await supabase
      .from('gsu_products')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published');

    if (productsError) {
      console.error('Products count error:', productsError);
    }

    // Get unique categories count from published products
    const { data: categoriesData, error: categoriesError } = await supabase
      .from('gsu_products')
      .select('category')
      .eq('status', 'published');

    const uniqueCategories = new Set(categoriesData?.map(p => p.category).filter(Boolean) || []);
    const totalCategories = uniqueCategories.size;

    // Monthly visitors (can be updated with actual analytics later)
    const monthlyVisitors = 1247;

    return NextResponse.json({
      success: true,
      data: {
        totalProducts: totalProducts || 0,
        totalCategories: totalCategories || 0,
        monthlyVisitors: monthlyVisitors,
      },
    });

  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}