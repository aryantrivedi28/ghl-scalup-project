// app/api/ghl-saas-hunt/products/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    console.log('========== PRODUCT DETAILS API START ==========');

    const { slug } = await params;

    console.log('Product Slug:', slug);

    // Get session token
    const sessionToken = request.headers
      .get('authorization')
      ?.replace('Bearer ', '');

    console.log('Session Token Exists:', !!sessionToken);

    // Fetch product
    const { data: product, error } = await supabase
      .from('gsu_products')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    console.log('Product Response:', product);
    console.log('Product Error:', error);

    if (error || !product) {
      console.log('❌ Product not found');

      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Default like status
    let hasLiked = false;

    // Check if user liked product
    if (sessionToken) {
      console.log('🔍 Checking user like status...');

      const { data: user, error: userError } = await supabase
        .from('gsu_users')
        .select('liked_products')
        .eq('session_token', sessionToken)
        .single();

      console.log('User Response:', user);
      console.log('User Error:', userError);

      if (user?.liked_products) {
        try {
          const likedProducts =
            typeof user.liked_products === 'string'
              ? JSON.parse(user.liked_products)
              : user.liked_products;

          console.log('Liked Products:', likedProducts);

          hasLiked = likedProducts.includes(product.id);

          console.log('Has User Liked Product:', hasLiked);

        } catch (parseError) {
          console.error('❌ Error parsing liked_products:', parseError);
        }
      }
    }

    // Parse comments_data
    let comments = [];

    if (product.comments_data) {
      try {
        comments =
          typeof product.comments_data === 'string'
            ? JSON.parse(product.comments_data)
            : product.comments_data;

      } catch (e) {
        console.error('❌ Comments parse error:', e);
        comments = [];
      }
    }

    // Parse screenshots
    let screenshots = [];

    if (product.screenshots) {
      try {
        screenshots =
          typeof product.screenshots === 'string'
            ? JSON.parse(product.screenshots)
            : product.screenshots;

      } catch (e) {
        console.error('❌ Screenshot parse error:', e);
        screenshots = [];
      }
    }

    // Final formatted product
    const formattedProduct = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      logo_url: product.logo_url,
      category: product.category,
      custom_category: product.custom_category || null,
      short_description: product.short_description,
      website_url: product.website_url,
      views_count: product.views_count || 0,
      likes_count: product.likes_count || 0,
      comments_count: product.comments_count || 0,
      submitter_name: product.submitter_name,
      submitter_email: product.submitter_email,
      published_at: product.published_at,

      // IMPORTANT
      hasLiked,

      screenshots: screenshots.filter(
        (url: string) => url && url.trim() !== ''
      ),

      comments: comments.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      ),
    };

    console.log('✅ Final Response:', formattedProduct);

    console.log('========== PRODUCT DETAILS API END ==========');

    return NextResponse.json({
      success: true,
      data: formattedProduct,
    });

  } catch (error) {
    console.error('🚨 Get product error:', error);

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}