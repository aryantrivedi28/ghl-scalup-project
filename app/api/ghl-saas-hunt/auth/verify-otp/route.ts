// app/api/ghl-saas-hunt/auth/verify-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    console.log('Verify OTP request:', { email, otp });

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    // Get user
    const { data: user, error: userError } = await supabase
      .from('gsu_users')
      .select('*')
      .eq('email', email)
      .single();

    if (userError || !user) {
      console.log('User not found:', userError);
      return NextResponse.json(
        { success: false, error: 'User not found. Please request OTP first.' },
        { status: 400 }
      );
    }

    console.log('User found:', {
      id: user.id,
      name: user.name,
      storedOtp: user.otp,
      otpExpiresAt: user.otp_expires_at,
    });

    if (!user.otp) {
      return NextResponse.json(
        { success: false, error: 'No OTP found. Please request a new OTP.' },
        { status: 400 }
      );
    }

    // Get current UTC time
    const nowUTC = new Date();
    const expiresAtUTC = new Date(user.otp_expires_at);
    
    console.log('Current UTC:', nowUTC.toISOString());
    console.log('Expires UTC:', expiresAtUTC.toISOString());
    console.log('Time diff (ms):', expiresAtUTC.getTime() - nowUTC.getTime());
    console.log('Is expired:', nowUTC.getTime() > expiresAtUTC.getTime());

    if (nowUTC.getTime() > expiresAtUTC.getTime()) {
      console.log('OTP expired');
      await supabase
        .from('gsu_users')
        .update({ otp: null, otp_expires_at: null })
        .eq('email', email);
      return NextResponse.json(
        { success: false, error: 'OTP expired. Please request a new OTP.' },
        { status: 400 }
      );
    }

    // Verify OTP
    if (user.otp !== otp) {
      console.log('OTP mismatch - Input:', otp, 'Stored:', user.otp);
      return NextResponse.json(
        { success: false, error: 'Invalid OTP. Please try again.' },
        { status: 400 }
      );
    }

    console.log('OTP verified successfully');

    // Generate session token (30 days expiry in UTC)
    const sessionToken = crypto.randomBytes(64).toString('hex');
    const sessionExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    console.log('Session token generated');
    console.log('Session expires UTC:', sessionExpiresAt.toISOString());

    // Update user as verified
    const { error: updateError } = await supabase
      .from('gsu_users')
      .update({
        is_verified: true,
        verified_at: nowUTC.toISOString(),
        session_token: sessionToken,
        session_expires_at: sessionExpiresAt.toISOString(),
        otp: null,
        otp_expires_at: null,
        updated_at: nowUTC.toISOString(),
      })
      .eq('email', email);

    if (updateError) {
      console.error('Update user error:', updateError);
      return NextResponse.json(
        { success: false, error: 'Failed to verify OTP' },
        { status: 500 }
      );
    }

    console.log('User verified and session created');

    return NextResponse.json({
      success: true,
      message: 'OTP verified successfully',
      sessionToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });

  } catch (error) {
    console.error('Verify OTP error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}