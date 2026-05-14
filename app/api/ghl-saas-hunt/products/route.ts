// app/api/ghl-saas-hunt/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

function generateSlug(name: string): string {
      return name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
}


export async function GET(request: NextRequest) {
      try {
            const searchParams = request.nextUrl.searchParams;
            const category = searchParams.get('category');
            const search = searchParams.get('search');
            const sort = searchParams.get('sort') || 'newest';
            const page = parseInt(searchParams.get('page') || '1');
            const limit = parseInt(searchParams.get('limit') || '12');

            const offset = (page - 1) * limit;

            let query = supabase
                  .from('gsu_products')
                  .select('*', { count: 'exact' })
                  .eq('status', 'published');

            // Apply category filter
            if (category && category !== 'all') {
                  const categoryMap: Record<string, string> = {
                        'crm-sales': 'CRM & Sales',
                        'automation': 'Automation',
                        'marketing': 'Marketing',
                        'agency-tools': 'Agency Tools',
                        'snapshots': 'Snapshots & Templates',
                        'white-label': 'White-Label SaaS',
                        'healthcare': 'Healthcare',
                        'real-estate': 'Real Estate',
                        'solar': 'Solar',
                        'recruitment': 'Recruitment',
                        'seo-local': 'SEO & Local',
                        'other': 'Other',
                  };

                  const categoryName = categoryMap[category];
                  if (categoryName) {
                        query = query.eq('category', categoryName);
                  }
            }

            // Apply search filter
            if (search && search.trim()) {
                  query = query.or(`name.ilike.%${search}%,short_description.ilike.%${search}%`);
            }

            // Apply sorting
            switch (sort) {
                  case 'newest':
                        query = query.order('created_at', { ascending: false });
                        break;
                  case 'most-viewed':
                        query = query.order('views_count', { ascending: false });
                        break;
                  default:
                        query = query.order('created_at', { ascending: false });
            }

            query = query.range(offset, offset + limit - 1);

            const { data: products, error, count } = await query;

            if (error) {
                  console.error('Products fetch error:', error);
                  return NextResponse.json(
                        { success: false, error: 'Failed to fetch products' },
                        { status: 500 }
                  );
            }

            // Format products - USE ACTUAL LOGO URL
            const formattedProducts = products?.map(product => {
                  const getLogoBg = (category: string) => {
                        const bgMap: Record<string, string> = {
                              'CRM & Sales': 'rgba(167,139,250,0.14)',
                              'Automation': 'rgba(37,201,125,0.14)',
                              'Marketing': 'rgba(248,208,0,0.14)',
                              'Agency Tools': 'rgba(251,146,60,0.14)',
                              'Snapshots & Templates': 'rgba(14,155,240,0.14)',
                              'White-Label SaaS': 'rgba(244,114,182,0.14)',
                              'Healthcare': 'rgba(244,114,182,0.14)',
                              'Real Estate': 'rgba(167,139,250,0.14)',
                              'Solar': 'rgba(251,146,60,0.14)',
                              'Recruitment': 'rgba(14,155,240,0.14)',
                              'SEO & Local': 'rgba(37,201,125,0.14)',
                        };
                        return bgMap[category] || 'rgba(14,155,240,0.14)';
                  };

                  // Use actual logo URL if exists, otherwise use fallback
                  const logoUrl = product.logo_url;
                  const isImageLogo = logoUrl && (logoUrl.startsWith('http://') || logoUrl.startsWith('https://'));

                  return {
                        id: product.id,
                        name: product.name,
                        slug: product.slug,
                        logo: isImageLogo ? logoUrl : '🚀', // Use URL if image, else emoji
                        logoType: isImageLogo ? 'image' : 'emoji', // Add type to help frontend
                        logoBg: getLogoBg(product.category),
                        category: product.category,
                        description: product.short_description,
                        tags: [],
                        website: product.website_url?.replace('https://', '').replace('http://', ''),
                        isFeatured: false,
                        isNew: false,
                        isHot: false,
                        hasSaaS: false,
                        viewsCount: product.views_count || 0,
                  };
            }) || [];

            return NextResponse.json({
                  success: true,
                  data: {
                        products: formattedProducts,
                        total: count || 0,
                        page,
                        limit,
                        totalPages: Math.ceil((count || 0) / limit),
                  },
            });

      } catch (error) {
            console.error('Products API error:', error);
            return NextResponse.json(
                  { success: false, error: 'Internal server error' },
                  { status: 500 }
            );
      }
}

// app/api/ghl-saas-hunt/products/route.ts (POST)
export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const body = await request.json();
    const { productName, founderName, email, category, logoUrl, description, websiteUrl } = body;

    console.log('Submit product request:', { productName, email, sessionToken: !!sessionToken });

    // Get user from session token
    let userId = null;
    
    if (sessionToken) {
      const { data: user } = await supabase
        .from('gsu_users')
        .select('id, email, name, total_submissions')
        .eq('session_token', sessionToken)
        .single();
      
      if (user) {
        userId = user.id;
        console.log('User found via session:', userId);
      }
    }

    // If no session token or user not found, check by email (for backward compatibility)
    if (!userId && email) {
      const { data: user } = await supabase
        .from('gsu_users')
        .select('id')
        .eq('email', email)
        .single();
      
      if (user) {
        userId = user.id;
        console.log('User found via email:', userId);
      }
    }

    // If still no user, create one
    if (!userId) {
      const { data: newUser, error: userError } = await supabase
        .from('gsu_users')
        .insert({
          name: founderName,
          email,
          phone: '',
          is_verified: false,
        })
        .select()
        .single();

      if (!userError && newUser) {
        userId = newUser.id;
        console.log('New user created:', userId);
      }
    }

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unable to identify user. Please verify OTP first.' },
        { status: 401 }
      );
    }

    // Generate unique slug
    let slug = generateSlug(productName);
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
        slug = `${generateSlug(productName)}-${counter}`;
      }
    }

    // Prepare product data
    const insertData = {
      user_id: userId,
      name: productName,
      slug,
      logo_url: logoUrl,
      category,
      short_description: description,
      website_url: websiteUrl,
      tags: body.tags ? body.tags.split(',').map((t: string) => t.trim()) : [],
      status: 'published',
      published_at: new Date().toISOString(),
    };

    const { data, error: insertError } = await supabase
      .from('gsu_products')
      .insert([insertData])
      .select()
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return NextResponse.json(
        { success: false, error: 'Failed to submit product' },
        { status: 500 }
      );
    }

    // Update user's total_submissions
    await supabase
      .from('gsu_users')
      .update({ total_submissions: (await getTotalSubmissions(userId)) + 1 })
      .eq('id', userId);

    return NextResponse.json({
      success: true,
      message: 'Product submitted successfully!',
      data: { id: data.id, slug: data.slug },
    });

  } catch (error) {
    console.error('Submit product error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function getTotalSubmissions(userId: string): Promise<number> {
  const { count } = await supabase
    .from('gsu_products')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);
  return count || 0;
}