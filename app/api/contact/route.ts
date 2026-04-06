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

    // Send thank you email to CUSTOMER
    console.log('Sending thank you email to customer:', email);
    await sendTemplateEmail({
      to: {
        email: email,  // Make sure this is a string
        name: name,
      },
      templateId: Number(process.env.BREVO_CUSTOMER_TEMPLATE_ID || '17'),
      params: templateParams,
    });

    // Send notification to ADMIN
    console.log('Sending notification to admin:', process.env.BREVO_ADMIN_EMAIL);
    await sendTemplateEmail({
      to: {
        email: process.env.BREVO_ADMIN_EMAIL!,
        name: 'Admin',
      },
      templateId: Number(process.env.BREVO_ADMIN_TEMPLATE_ID || '16'),
      params: templateParams,
      replyTo: email,  // This should be a string email, not an object
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