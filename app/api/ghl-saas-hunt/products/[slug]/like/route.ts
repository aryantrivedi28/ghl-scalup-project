// app/api/ghl-saas-hunt/products/[slug]/like/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    console.log('========== LIKE API START ==========');

    const { slug } = await params;

    console.log('Product Slug:', slug);

    // Get authorization header
    const authHeader = request.headers.get('authorization');
    console.log('Authorization Header:', authHeader);

    // Extract session token
    const sessionToken = authHeader?.replace('Bearer ', '');

    console.log('Session Token Exists:', !!sessionToken);

    // Parse request body
    const body = await request.json();
    console.log('Request Body:', body);

    const { action } = body;

    console.log('Action:', action);

    if (!action || !['like', 'unlike'].includes(action)) {
      console.log('❌ Invalid action');

      return NextResponse.json(
        { success: false, error: 'Invalid action' },
        { status: 400 }
      );
    }

    if (!sessionToken) {
      console.log('❌ No session token provided');

      return NextResponse.json(
        { success: false, error: 'Please verify your identity first' },
        { status: 401 }
      );
    }

    console.log('🔍 Fetching user from session token...');

    // Get user from session token
    const { data: user, error: userError } = await supabase
      .from('gsu_users')
      .select('id, total_likes, liked_products')
      .eq('session_token', sessionToken)
      .single();

    console.log('User Response:', user);
    console.log('User Error:', userError);

    if (userError || !user) {
      console.log('❌ Invalid session or user not found');

      return NextResponse.json(
        { success: false, error: 'Invalid session. Please verify again.' },
        { status: 401 }
      );
    }

    console.log('🔍 Fetching product details...');

    // Get product to get its ID
    const { data: product, error: productError } = await supabase
      .from('gsu_products')
      .select('id, likes_count')
      .eq('slug', slug)
      .single();

    console.log('Product Response:', product);
    console.log('Product Error:', productError);

    if (productError || !product) {
      console.log('❌ Product not found');

      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    console.log('🔍 Parsing liked products...');

    // Parse user's liked products
    let likedProducts: string[] = [];

    if (user.liked_products) {
      try {
        likedProducts =
          typeof user.liked_products === 'string'
            ? JSON.parse(user.liked_products)
            : user.liked_products;

        console.log('Parsed Liked Products:', likedProducts);

      } catch (e) {
        console.error('❌ Error parsing liked_products:', e);
        likedProducts = [];
      }
    }

    const hasLiked = likedProducts.includes(product.id);
    const currentLikes = product.likes_count || 0;

    console.log('Has User Already Liked:', hasLiked);
    console.log('Current Product Likes:', currentLikes);

    // Handle like/unlike
    let newLikes = currentLikes;
    let newLikedProducts = [...likedProducts];

    if (action === 'like') {
      console.log('👍 Processing LIKE action');

      if (hasLiked) {
        console.log('❌ User already liked this product');

        return NextResponse.json(
          { success: false, error: 'You have already liked this product' },
          { status: 400 }
        );
      }

      newLikes = currentLikes + 1;
      newLikedProducts.push(product.id);

      console.log('New Likes Count:', newLikes);
      console.log('Updated Liked Products:', newLikedProducts);

    } else if (action === 'unlike') {
      console.log('👎 Processing UNLIKE action');

      if (!hasLiked) {
        console.log('❌ User has not liked this product');

        return NextResponse.json(
          { success: false, error: 'You have not liked this product' },
          { status: 400 }
        );
      }

      newLikes = Math.max(0, currentLikes - 1);

      newLikedProducts = likedProducts.filter(
        (id: string) => id !== product.id
      );

      console.log('New Likes Count:', newLikes);
      console.log('Updated Liked Products:', newLikedProducts);
    }

    console.log('🔄 Updating product likes count...');

    // Update product likes count
    const { error: updateProductError } = await supabase
      .from('gsu_products')
      .update({ likes_count: newLikes })
      .eq('id', product.id);

    console.log('Product Update Error:', updateProductError);

    if (updateProductError) {
      console.error('❌ Product update error:', updateProductError);

      return NextResponse.json(
        { success: false, error: 'Failed to update like' },
        { status: 500 }
      );
    }

    console.log('🔄 Updating user like history...');

    // Update user's liked products and total likes
    let userTotalLikes = user.total_likes || 0;

    if (action === 'like') {
      userTotalLikes++;
    } else {
      userTotalLikes = Math.max(0, userTotalLikes - 1);
    }

    console.log('Updated User Total Likes:', userTotalLikes);

    const { error: updateUserError } = await supabase
      .from('gsu_users')
      .update({
        liked_products: newLikedProducts,
        total_likes: userTotalLikes,
        last_activity: new Date().toISOString(),
      })
      .eq('id', user.id);

    console.log('User Update Error:', updateUserError);

    if (updateUserError) {
      console.error('❌ User update error:', updateUserError);

      return NextResponse.json(
        { success: false, error: 'Failed to update like' },
        { status: 500 }
      );
    }

    console.log('✅ Like operation successful');

    const responseData = {
      likesCount: newLikes,
      hasLiked: action === 'like',
    };

    console.log('Response Data:', responseData);

    console.log('========== LIKE API END ==========');

    return NextResponse.json({
      success: true,
      data: responseData,
    });

  } catch (error) {
    console.error('🚨 Like API error:', error);

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}