// app/api/ghl-saas-hunt/exports/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: NextRequest) {
  try {
    // Optional: Add API key authentication for security
    const apiKey = request.headers.get('x-api-key');
    const validApiKey = process.env.GHL_EXPORT_API_KEY;
    
    if (validApiKey && apiKey !== validApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      );
    }

    // Get query parameters for filtering
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '100');
    const fromDate = searchParams.get('from_date');
    const category = searchParams.get('category');
    
    // Build query using the view
    let query = supabase
      .from('product_submissions_view')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply filters
    if (limit && !isNaN(limit)) {
      query = query.limit(limit);
    }
    
    if (fromDate) {
      query = query.gte('created_at', fromDate);
    }
    
    if (category && category !== 'all') {
      query = query.eq('product_category', category);
    }

    const { data: submissions, error } = await query;

    if (error) {
      console.error('Export view error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    // Group by user for better organization
    const usersMap = new Map();
    submissions?.forEach(sub => {
      if (sub.user_id) {
        if (!usersMap.has(sub.user_id)) {
          usersMap.set(sub.user_id, {
            user_id: sub.user_id,
            name: sub.submitter_name,
            email: sub.submitter_email,
            phone: sub.submitter_phone,
            is_verified: sub.submitter_verified,
            verified_at: sub.submitter_verified_at,
            joined_at: sub.user_joined_at,
            last_activity: sub.user_last_activity,
            total_submissions: sub.total_submissions,
            total_comments: sub.total_comments,
            total_likes: sub.total_likes,
            products: []
          });
        }
        usersMap.get(sub.user_id).products.push({
          product_id: sub.product_id,
          product_name: sub.product_name,
          product_slug: sub.product_slug,
          product_category: sub.custom_category || sub.product_category,
          product_description: sub.product_description,
          product_url: sub.product_url,
          product_logo: sub.product_logo,
          product_views: sub.product_views,
          product_likes: sub.product_likes,
          product_comments: sub.product_comments,
          product_screenshots: sub.product_screenshots || [],
          published_at: sub.published_at,
          created_at: sub.created_at,
        });
      }
    });

    // Prepare response
    const response = {
      success: true,
      metadata: {
        total_products: submissions?.length || 0,
        total_unique_users: usersMap.size,
        exported_at: new Date().toISOString(),
        version: "1.0",
        filters: {
          limit: limit || 'none',
          from_date: fromDate || 'none',
          category: category || 'all'
        }
      },
      users: Array.from(usersMap.values()),
      products: submissions?.map(sub => ({
        product_id: sub.product_id,
        product_name: sub.product_name,
        product_slug: sub.product_slug,
        product_category: sub.custom_category || sub.product_category,
        product_description: sub.product_description,
        product_url: sub.product_url,
        product_logo: sub.product_logo,
        product_views: sub.product_views,
        product_likes: sub.product_likes,
        product_comments: sub.product_comments,
        product_screenshots: sub.product_screenshots || [],
        published_date: sub.published_at,
        created_date: sub.created_at,
        submitter_name: sub.submitter_name,
        submitter_email: sub.submitter_email,
        submitter_phone: sub.submitter_phone,
        submitter_verified: sub.submitter_verified,
      })),
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Export API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}