// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendTemplateEmail } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log('Received form submission:', { name, email, phone, message });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Prepare template parameters
    const templateParams = {
      name: name,
      email: email,
      phone: phone || 'Not provided',
      message: message,
      requirement: 'General Inquiry',
    };

    // 1. Send THANK YOU email to CUSTOMER (Template 17)
    console.log('📧 Sending THANK YOU email to customer:', email);
    await sendTemplateEmail({
      to: { email: email, name: name },
      templateId: Number(process.env.BREVO_CUSTOMER_TEMPLATE_ID || '17'),
      params: templateParams,
    });

    // 2. Send NOTIFICATION email to ADMIN (Template 16)
    const adminEmail = process.env.BREVO_ADMIN_EMAIL || 'aryan@ghlscaleup.com';
    console.log('📧 Sending NOTIFICATION to admin:', adminEmail);
    
    await sendTemplateEmail({
      to: { email: adminEmail, name: 'GHL Scale Up Admin' },
      templateId: Number(process.env.BREVO_ADMIN_TEMPLATE_ID || '16'),
      params: templateParams,
      replyTo: email,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully! Check your email for confirmation.' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    );
  }
}