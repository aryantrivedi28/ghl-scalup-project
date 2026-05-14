// app/api/ghl-saas-hunt/products/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const { data: product, error } = await supabase
      .from('gsu_products')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Parse comments_data if exists
    let comments = [];
    if (product.comments_data) {
      try {
        comments = typeof product.comments_data === 'string' 
          ? JSON.parse(product.comments_data) 
          : product.comments_data;
      } catch (e) {
        comments = [];
      }
    }

    const formattedProduct = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      logo_url: product.logo_url,
      category: product.category,
      short_description: product.short_description,
      website_url: product.website_url,
      views_count: product.views_count || 0,
      likes_count: product.likes_count || 0,
      comments_count: product.comments_count || 0,
      submitter_name: product.submitter_name,
      submitter_email: product.submitter_email,
      published_at: product.published_at,
      comments: comments.sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    };

    return NextResponse.json({
      success: true,
      data: formattedProduct,
    });

  } catch (error) {
    console.error('Get product error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}