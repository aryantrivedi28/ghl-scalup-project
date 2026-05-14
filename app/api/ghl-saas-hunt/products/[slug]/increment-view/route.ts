// app/api/ghl-saas-hunt/products/[slug]/increment-view/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // First get the current product
    const { data: product, error: fetchError } = await supabase
      .from('gsu_products')
      .select('views_count')
      .eq('slug', slug)
      .single();

    if (fetchError || !product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    const currentViews = product.views_count || 0;
    const { error: updateError } = await supabase
      .from('gsu_products')
      .update({ views_count: currentViews + 1 })
      .eq('slug', slug);

    if (updateError) {
      console.error('Increment view error:', updateError);
      return NextResponse.json(
        { success: false, error: 'Failed to increment view' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Increment view error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to increment view' },
      { status: 500 }
    );
  }
}