// app/api/ghl-saas-hunt/admin/products/manual/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { verifyAdminSession } from '../../verify/route';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRandomEmoji(): string {
  const emojis = ['🚀', '⭐', '🔥', '💼', '🏠', '🤖', '📊', '⚡', '🎯', '💡'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin session
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!sessionToken || !verifyAdminSession(sessionToken)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.productName || !body.founderName || !body.email || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique slug
    let slug = generateSlug(body.productName);
    let isUnique = false;
    let counter = 0;
    
    while (!isUnique && counter < 5) {
      const { data: existing } = await supabase
        .from('gsu_products')
        .select('slug')
        .eq('slug', slug)
        .single();
      
      if (!existing) {
        isUnique = true;
      } else {
        counter++;
        slug = `${generateSlug(body.productName)}-${counter}`;
      }
    }

    // Prepare product data
    const insertData = {
      name: body.productName,
      slug,
      logo_url: body.logoUrl || null,
      logo_emoji: getRandomEmoji(),
      category: body.category,
      short_description: body.description || '',
      website_url: body.websiteUrl || null,
      pricing: null,
      features: [],
      is_featured: false,
      is_new: true,
      is_hot: false,
      has_saas_mode: false,
      likes_count: 0,
      views_count: 0,
      comments_count: 0,
      status: 'published',
      submitter_name: body.founderName,
      submitter_email: body.email,
      published_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('gsu_products')
      .insert([insertData])
      .select()
      .single();

    if (error) {
      console.error('Manual insert error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to add product' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Product added successfully',
      data: { id: data.id, slug: data.slug },
    });

  } catch (error) {
    console.error('Manual listing error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}