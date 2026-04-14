import { NextRequest, NextResponse } from 'next/server';
import { sendTemplateEmail } from '@/lib/brevo';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const templateParams = {
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'General Inquiry',
      message,
    };

    // ✅ 1. STORE IN SUPABASE
    const { error: dbError } = await supabase
      .from('ghl_contact_leads')
      .insert([
        {
          name,
          email,
          phone,
          service,
          message,
          source: 'contact-page',

          route: '/api/contact-page',
          lead_type: 'general',

          ghl_status: 'pending',

          metadata: {
            form: 'basic-contact'
          }
        },
      ]);

    if (dbError) {
      console.error('DB Error:', dbError);
      throw new Error('Database insert failed');
    }

    // ✅ 2. SEND EMAILS
    await sendTemplateEmail({
      to: { email, name },
      templateId: Number(process.env.BREVO_CUSTOMER_TEMPLATE_ID || '18'),
      params: templateParams,
    });

    const adminEmail = process.env.BREVO_ADMIN_EMAIL!;
    await sendTemplateEmail({
      to: { email: adminEmail, name: 'Admin' },
      templateId: Number(process.env.BREVO_ADMIN_TEMPLATE_ID || '19'),
      params: templateParams,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully!',
    });

  } catch (error) {
    console.error('Contact page error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}