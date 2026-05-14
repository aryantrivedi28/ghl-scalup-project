// app/api/ghl-saas-hunt/admin/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { verifyAdminSession } from '../verify/route';

export async function GET(request: NextRequest) {
  try {
    // Verify admin session
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!sessionToken || !verifyAdminSession(sessionToken)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';

    // Build query
    let query = supabase
      .from('gsu_products')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply search filter
    if (search) {
      query = query.or(`name.ilike.%${search}%,submitter_name.ilike.%${search}%,submitter_email.ilike.%${search}%,category.ilike.%${search}%`);
    }

    const { data: products, error } = await query;

    if (error) {
      console.error('Fetch products error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch products' },
        { status: 500 }
      );
    }

    // Format products for admin panel
    const formattedProducts = products?.map(product => ({
      id: product.id,
      productName: product.name,
      founderName: product.submitter_name,
      email: product.submitter_email,
      category: product.category,
      logo: product.logo_emoji || '🚀',
      submittedDate: product.created_at,
      status: product.status,
      description: product.short_description,
      website: product.website_url?.replace('https://', '').replace('http://', ''),
      hasSaaS: product.has_saas_mode,
    })) || [];

    return NextResponse.json({
      success: true,
      data: {
        products: formattedProducts,
        total: formattedProducts.length,
      },
    });

  } catch (error) {
    console.error('Admin products error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}