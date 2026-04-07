// app/api/contact-page/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendTemplateEmail } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('Contact Page Submission:', { name, email, phone, service, message });

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
      service: service || 'General Inquiry',
      message: message,
    };

    // 1. Send THANK YOU email to CUSTOMER (Template 18 - Customer Thank You)
    console.log('📧 Sending THANK YOU email to customer:', email);
    await sendTemplateEmail({
      to: { email: email, name: name },
      templateId: Number(process.env.BREVO_CUSTOMER_TEMPLATE_ID || '18'),
      params: templateParams,
    });

    // 2. Send NOTIFICATION email to ADMIN (Template 19 - Admin Notification)
    const adminEmail = process.env.BREVO_ADMIN_EMAIL || 'aryan@ghlscaleup.com';
    console.log('📧 Sending NOTIFICATION to admin:', adminEmail);
    
    await sendTemplateEmail({
      to: { email: adminEmail, name: 'GHL Scale Up Admin' },
      templateId: Number(process.env.BREVO_ADMIN_TEMPLATE_ID || '19'),
      params: templateParams,
      replyTo: email,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully! Check your email for confirmation.' 
    });
    
  } catch (error) {
    console.error('Contact page error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    );
  }
}