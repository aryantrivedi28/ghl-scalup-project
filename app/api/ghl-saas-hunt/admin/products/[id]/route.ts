// app/api/ghl-saas-hunt/admin/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { verifyAdminSession } from '../../verify/route';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin session
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!sessionToken || !verifyAdminSession(sessionToken)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    // Prepare update data
    const updateData: any = {
      name: body.productName,
      submitter_name: body.founderName,
      submitter_email: body.email,
      category: body.category,
      short_description: body.description,
      website_url: body.website ? `https://${body.website}` : null,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('gsu_products')
      .update(updateData)
      .eq('id', id);

    if (error) {
      console.error('Update product error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to update product' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Product updated successfully',
    });

  } catch (error) {
    console.error('Update product error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin session
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!sessionToken || !verifyAdminSession(sessionToken)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;

    const { error } = await supabase
      .from('gsu_products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Delete product error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to delete product' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully',
    });

  } catch (error) {
    console.error('Delete product error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}