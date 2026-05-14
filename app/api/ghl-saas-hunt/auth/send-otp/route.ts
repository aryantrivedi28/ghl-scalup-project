// app/api/ghl-saas-hunt/auth/send-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json();

    console.log('Send OTP request:', { name, email, phone });

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email and phone are required' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Use UTC timestamps
    const nowUTC = new Date();
    const expiresAtUTC = new Date(nowUTC.getTime() + 5 * 60 * 1000);

    console.log('Current UTC:', nowUTC.toISOString());
    console.log('Generated OTP:', otp);
    console.log('Expires UTC:', expiresAtUTC.toISOString());

    // Check if user exists
    const { data: existingUser } = await supabase
      .from('gsu_users')
      .select('id')
      .eq('email', email)
      .single();

    let result;
    if (existingUser) {
      result = await supabase
        .from('gsu_users')
        .update({
          name,
          phone,
          otp,
          otp_expires_at: expiresAtUTC.toISOString(),
          is_verified: false,
          updated_at: nowUTC.toISOString(),
        })
        .eq('email', email);
    } else {
      result = await supabase
        .from('gsu_users')
        .insert({
          name,
          email,
          phone,
          otp,
          otp_expires_at: expiresAtUTC.toISOString(),
          is_verified: false,
          total_comments: 0,
          total_likes: 0,
          total_submissions: 0,
          created_at: nowUTC.toISOString(),
        });
    }

    if (result.error) {
      console.error('Database error:', result.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send OTP' },
        { status: 500 }
      );
    }

    console.log(`📧 OTP for ${email}: ${otp}`);
    console.log(`OTP expires at: ${expiresAtUTC.toISOString()}`);

    return NextResponse.json({
      success: true,
      message: 'OTP sent to your email',
    });

  } catch (error) {
    console.error('Send OTP error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}