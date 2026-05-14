// app/api/ghl-saas-hunt/products/[slug]/like/route.ts (Updated)
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const { action } = await request.json();

    console.log('Like API called:', { slug, action, sessionToken: !!sessionToken });

    if (!action || !['like', 'unlike'].includes(action)) {
      return NextResponse.json(
        { success: false, error: 'Invalid action' },
        { status: 400 }
      );
    }

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: 'Please verify your identity first' },
        { status: 401 }
      );
    }

    // Get user from session token
    const { data: user, error: userError } = await supabase
      .from('gsu_users')
      .select('id, total_likes')
      .eq('session_token', sessionToken)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: 'Invalid session. Please verify again.' },
        { status: 401 }
      );
    }

    // Get current product
    const { data: product, error: productError } = await supabase
      .from('gsu_products')
      .select('likes_count')
      .eq('slug', slug)
      .single();

    if (productError || !product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    const currentLikes = product.likes_count || 0;
    const newLikes = action === 'like' ? currentLikes + 1 : Math.max(0, currentLikes - 1);

    const { error: updateError } = await supabase
      .from('gsu_products')
      .update({ likes_count: newLikes })
      .eq('slug', slug);

    if (updateError) {
      console.error('Like update error:', updateError);
      return NextResponse.json(
        { success: false, error: 'Failed to update like' },
        { status: 500 }
      );
    }

    // Update user's total_likes
    const newTotalLikes = action === 'like' 
      ? (user.total_likes || 0) + 1 
      : Math.max(0, (user.total_likes || 0) - 1);
    
    await supabase
      .from('gsu_users')
      .update({ 
        total_likes: newTotalLikes,
        last_activity: new Date().toISOString(),
      })
      .eq('id', user.id);

    return NextResponse.json({
      success: true,
      data: { likesCount: newLikes }
    });

  } catch (error) {
    console.error('Like API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}