// lib/brevo.ts
"use server";

interface SendTemplateEmailParams {
  to: { email: string; name: string };
  templateId: number;
  params: Record<string, any>;
  replyTo?: string;
}

/**
 * Send email using a Brevo template
 */
export async function sendTemplateEmail({
  to,
  templateId,
  params,
  replyTo,
}: SendTemplateEmailParams) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME;

    if (!apiKey) {
      throw new Error('BREVO_API_KEY is not defined in environment variables');
    }

    if (!senderEmail) {
      throw new Error('BREVO_SENDER_EMAIL is not defined in environment variables');
    }

    // Validate recipient
    if (!to || !to.email) {
      console.error('Invalid recipient:', to);
      throw new Error('Recipient email is missing');
    }

    console.log(`📧 Preparing to send email to: ${to.email} (${to.name}) using template: ${templateId}`);

    const requestBody = {
      to: [{
        email: to.email,
        name: to.name || 'Valued Customer'
      }],
      templateId: templateId,
      params: params,
      sender: {
        name: senderName || 'GHL Scale Up',
        email: senderEmail,
      },
    };

//     // Add reply-to if provided
//     if (replyTo && replyTo.email) {
//       requestBody.replyTo = { 
//         email: replyTo.email,
//         name: replyTo.name || 'Customer'
//       };
//     }

    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Brevo API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: data
      });
      throw new Error(data.message || 'Failed to send email');
    }
    
    console.log(`✅ Email sent successfully via template ${templateId} to ${to.email}`);
    return data;
  } catch (error) {
    console.error(`Error sending template email ${templateId}:`, error);
    throw error;
  }
}

/**
 * Send raw email without template (fallback)
 */
export async function sendRawEmail({
  to,
  subject,
  htmlContent,
  textContent,
  replyTo,
}: {
  to: { email: string; name: string };
  subject: string;
  htmlContent: string;
  textContent: string;
  replyTo?: { email: string; name?: string };
}) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME;

    if (!apiKey || !senderEmail) {
      throw new Error('Missing required environment variables');
    }

    if (!to || !to.email) {
      throw new Error('Recipient email is missing');
    }

    const requestBody = {
      to: [{
        email: to.email,
        name: to.name || 'Valued Customer'
      }],
      subject: subject,
      htmlContent: htmlContent,
      textContent: textContent,
      sender: {
        name: senderName || 'GHL Scale Up',
        email: senderEmail,
      },
    };

//     if (replyTo && replyTo.email) {
//       requestBody.replyTo = { email: replyTo.email };
//     }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Brevo API Error:', data);
      throw new Error(data.message || 'Failed to send email');
    }
    
    console.log('✅ Raw email sent:', data);
    return data;
  } catch (error) {
    console.error('Error sending raw email:', error);
    throw error;
  }
}