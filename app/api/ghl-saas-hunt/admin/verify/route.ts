// app/api/ghl-saas-hunt/admin/verify/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

declare global {
  var adminSessions: Map<string, { email: string; expiresAt: number; createdAt: number }> | undefined;
}

// Allowed admin emails from environment variable
const ALLOWED_ADMINS = (process.env.ALLOWED_ADMIN_EMAILS || '')
  .split(',')
  .map(email => email.trim().toLowerCase());

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email is allowed
    if (!ALLOWED_ADMINS.includes(email.toLowerCase())) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized access' },
        { status: 401 }
      );
    }

    // Generate session token (12 hours expiry)
    const sessionToken = crypto.randomBytes(64).toString('hex');
    const expiresAt = Date.now() + 12 * 60 * 60 * 1000;

    // Store session in memory (for production, use Redis or database)
    // For MVP, we'll use a simple Map (will reset on server restart)
    if (!global.adminSessions) {
      global.adminSessions = new Map();
    }
    global.adminSessions.set(sessionToken, {
      email: email.toLowerCase(),
      expiresAt,
      createdAt: Date.now(),
    });

    return NextResponse.json({
      success: true,
      sessionToken,
      expiresAt,
      admin: { email }
    });

  } catch (error) {
    console.error('Admin verify error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to verify admin session (to be used in other admin APIs)
export function verifyAdminSession(sessionToken: string): boolean {
  if (!global.adminSessions) return false;
  const session = global.adminSessions.get(sessionToken);
  if (!session) return false;
  if (Date.now() > session.expiresAt) {
    global.adminSessions.delete(sessionToken);
    return false;
  }
  return true;
}