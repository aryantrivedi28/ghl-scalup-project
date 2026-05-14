// app/api/ghl-saas-hunt/products/[slug]/comments/[commentId]/like/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; commentId: string }> }
) {
  console.log('=== COMMENT LIKE API CALLED ===');
  
  try {
    const { slug, commentId } = await params;
    console.log('Product slug:', slug);
    console.log('Comment ID:', commentId);

    const { action, sessionToken } = await request.json();
    console.log('Action:', action);
    console.log('Session token:', sessionToken ? sessionToken.substring(0, 20) + '...' : 'NO TOKEN');

    if (!action || !['like', 'unlike'].includes(action)) {
      console.log('Invalid action');
      return NextResponse.json(
        { success: false, error: 'Invalid action' },
        { status: 400 }
      );
    }

    // Verify user session (optional for anonymous likes)
    let userId = null;
    let userIdentifier = `anonymous_${request.headers.get('x-forwarded-for') || 'unknown'}`;
    
    if (sessionToken) {
      console.log('Verifying user session...');
      const { data: user, error: userError } = await supabase
        .from('gsu_users')
        .select('id')
        .eq('session_token', sessionToken)
        .single();
      
      if (user && !userError) {
        userId = user.id;
        userIdentifier = `user_${userId}`;
        console.log('User found:', userId);
      } else {
        console.log('User not found for session token');
      }
    }

    // Get current product
    console.log('Fetching product...');
    const { data: product, error: productError } = await supabase
      .from('gsu_products')
      .select('comments_data')
      .eq('slug', slug)
      .single();

    if (productError || !product) {
      console.error('Product fetch error:', productError);
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Parse comments
    let comments = [];
    if (product.comments_data) {
      try {
        comments = typeof product.comments_data === 'string' 
          ? JSON.parse(product.comments_data) 
          : product.comments_data;
        console.log('Comments found:', comments.length);
      } catch (e) {
        console.error('Error parsing comments:', e);
        comments = [];
      }
    }

    // Find and update comment
    let commentFound = false;
    let updatedComment: any = null;
    const updatedComments = comments.map((comment: any) => {
      if (comment.id === commentId) {
        commentFound = true;
        const hasLiked = comment.liked_by?.includes(userIdentifier);
        console.log('Comment found, hasLiked:', hasLiked);
        
        if (action === 'like' && !hasLiked) {
          updatedComment = {
            ...comment,
            likes: comment.likes + 1,
            liked_by: [...(comment.liked_by || []), userIdentifier],
          };
          console.log('Liking comment - new likes:', updatedComment.likes);
          return updatedComment;
        } else if (action === 'unlike' && hasLiked) {
          updatedComment = {
            ...comment,
            likes: comment.likes - 1,
            liked_by: comment.liked_by?.filter((id: string) => id !== userIdentifier) || [],
          };
          console.log('Unliking comment - new likes:', updatedComment.likes);
          return updatedComment;
        }
      }
      return comment;
    });

    if (!commentFound) {
      console.log('Comment not found:', commentId);
      return NextResponse.json(
        { success: false, error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Update product
    console.log('Updating product comments...');
    const { error: updateError } = await supabase
      .from('gsu_products')
      .update({
        comments_data: updatedComments,
        updated_at: new Date().toISOString(),
      })
      .eq('slug', slug);

    if (updateError) {
      console.error('Update product error:', updateError);
      return NextResponse.json(
        { success: false, error: 'Failed to update comment like' },
        { status: 500 }
      );
    }

    console.log('Comment like updated successfully!');
    console.log('=== COMMENT LIKE COMPLETED ===');

    return NextResponse.json({
      success: true,
      data: { likes: updatedComment?.likes || 0 },
    });

  } catch (error) {
    console.error('Comment like error:', error);
    console.log('=== COMMENT LIKE FAILED ===');
    return NextResponse.json(
      { success: false, error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}