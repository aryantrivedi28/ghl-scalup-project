// app/api/ghl-saas-hunt/admin/export/route.ts
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

    // Fetch all products
    const { data: products, error } = await supabase
      .from('gsu_products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Export fetch error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch data' },
        { status: 500 }
      );
    }

    // Prepare CSV data
    const csvData = products?.map(product => ({
      'Product Name': product.name,
      'Founder Name': product.submitter_name,
      'Email': product.submitter_email,
      'Category': product.category,
      'Lead Intent': product.lead_intent || 'medium',
      'Status': product.status,
      'Views': product.views_count || 0,
      'Likes': product.likes_count || 0,
      'Comments': product.comments_count || 0,
      'Website': product.website_url,
      'Description': product.short_description,
      'Published Date': new Date(product.published_at || product.created_at).toLocaleDateString(),
    })) || [];

    if (csvData.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No data to export' },
        { status: 404 }
      );
    }

    // Generate CSV
    const headers = Object.keys(csvData[0]);
    const csvRows = [
      headers.join(','),
      ...csvData.map(row => 
        headers.map(header => {
          const value = row[header as keyof typeof row];
          // Escape quotes and wrap in quotes if contains comma
          const stringValue = String(value || '');
          if (stringValue.includes(',') || stringValue.includes('"')) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        }).join(',')
      ),
    ];

    const csv = csvRows.join('\n');

    // Return CSV file
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename=ghl-saas-directory-${new Date().toISOString().split('T')[0]}.csv`,
      },
    });

  } catch (error) {
    console.error('Export CSV error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}