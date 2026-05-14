// app/api/ghl-saas-hunt/products/[slug]/comments/route.ts (Updated)
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const { comment } = await request.json();

    console.log('Add comment request:', { slug, comment, sessionToken: !!sessionToken });

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: 'Please verify your identity first' },
        { status: 401 }
      );
    }

    if (!comment?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Comment is required' },
        { status: 400 }
      );
    }

    // Get user from session token
    const { data: user, error: userError } = await supabase
      .from('gsu_users')
      .select('id, name, email, phone, total_comments')
      .eq('session_token', sessionToken)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: 'Invalid session. Please verify again.' },
        { status: 401 }
      );
    }

    // Get product
    const { data: product, error: productError } = await supabase
      .from('gsu_products')
      .select('comments_data, comments_count')
      .eq('slug', slug)
      .single();

    if (productError || !product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Parse existing comments
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

    // Create new comment
    const newComment = {
      id: `comment_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      user_id: user.id,
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phone,
      comment: comment.trim(),
      likes: 0,
      liked_by: [],
      verified: true,
      createdAt: new Date().toISOString(),
    };

    comments.unshift(newComment);

    // Update product
    const { error: updateError } = await supabase
      .from('gsu_products')
      .update({
        comments_data: comments,
        comments_count: comments.length,
        updated_at: new Date().toISOString(),
      })
      .eq('slug', slug);

    if (updateError) {
      console.error('Update product error:', updateError);
      return NextResponse.json(
        { success: false, error: 'Failed to add comment' },
        { status: 500 }
      );
    }

    // Update user's total_comments
    await supabase
      .from('gsu_users')
      .update({ 
        total_comments: (user.total_comments || 0) + 1,
        last_activity: new Date().toISOString(),
      })
      .eq('id', user.id);

    return NextResponse.json({
      success: true,
      message: 'Comment added successfully',
      data: newComment,
    });

  } catch (error) {
    console.error('Add comment error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}