// app/api/ghl-saas-hunt/auth/session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const sessionToken = authHeader?.replace('Bearer ', '');

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: 'No session token provided' },
        { status: 401 }
      );
    }

    const { data: user, error } = await supabase
      .from('gsu_users')
      .select('id, name, email, phone, session_expires_at, is_verified')
      .eq('session_token', sessionToken)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { success: false, error: 'Invalid session' },
        { status: 401 }
      );
    }

    // Check if session expired using UTC
    const nowUTC = new Date();
    const expiresAtUTC = new Date(user.session_expires_at);
    
    
    if (nowUTC.getTime() > expiresAtUTC.getTime()) {
      return NextResponse.json(
        { success: false, error: 'Session expired' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });

  } catch (error) {
    console.error('Session check error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}