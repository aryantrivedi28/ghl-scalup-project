import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: NextRequest) {
  try {
    console.log('========== CREATE ORDER API HIT ==========');

    const body = await request.json();
    console.log('Request Body:', body);

    // Default to USD now
    const { amount, currency = 'USD', receipt } = body;

    console.log('Amount Received:', amount);
    console.log('Currency:', currency);
    console.log('Receipt:', receipt);

    // Validate API keys exist
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('❌ Razorpay API keys missing in environment variables');
      return NextResponse.json(
        { 
          success: false,
          error: 'Payment gateway configuration error' 
        },
        { status: 500 }
      );
    }

    // For USD, amount is in cents (1 USD = 100 cents)
    const amountInCents = Math.round(amount * 100);
    console.log('Amount In Cents:', amountInCents);

    // Minimum amount validation ($1 = 100 cents)
    if (amountInCents < 100) {
      console.log('Validation Failed: Amount less than $1');
      return NextResponse.json(
        { 
          success: false,
          error: 'Minimum amount is $1 (100 cents)' 
        },
        { status: 400 }
      );
    }

    // Maximum amount validation ($10,000)
    if (amountInCents > 1000000) {
      console.log('Validation Failed: Amount exceeds $10,000');
      return NextResponse.json(
        { 
          success: false,
          error: 'Amount exceeds maximum limit of $10,000' 
        },
        { status: 400 }
      );
    }

    console.log('RAZORPAY_KEY_ID Exists:', !!process.env.RAZORPAY_KEY_ID);
    console.log('RAZORPAY_KEY_SECRET Exists:', !!process.env.RAZORPAY_KEY_SECRET);

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    console.log('Razorpay Instance Created');

    // Create order with USD
    const options = {
      amount: amountInCents, // Amount in cents for USD
      currency: currency.toUpperCase(), // Should be 'USD'
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1, // Auto-capture payment
      notes: {
        source: 'ghl_scaleup',
        timestamp: new Date().toISOString(),
        amount_usd: amount.toString(),
      },
    };

    console.log('Order Options:', options);

    const order = await razorpay.orders.create(options);

    console.log('✅ Order Created Successfully');
    console.log('Order ID:', order.id);
    console.log('Order Amount:', order.amount);
    console.log('Order Currency:', order.currency);

    return NextResponse.json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error: any) {
    console.error('========== ORDER CREATION ERROR ==========');
    console.error('Status Code:', error?.statusCode);
    console.error('Error:', error?.error);
    console.error('Message:', error?.message);

    // Handle specific Razorpay errors
    if (error?.statusCode === 401) {
      console.error('❌ Authentication failed - Check your API keys');
      return NextResponse.json(
        {
          success: false,
          error: 'Payment gateway authentication failed. Please check your API keys.',
        },
        { status: 401 }
      );
    }

    if (error?.statusCode === 400) {
      console.error('❌ Bad Request - Invalid parameters');
      return NextResponse.json(
        {
          success: false,
          error: error?.error?.description || 'Invalid payment request',
        },
        { status: 400 }
      );
    }

    console.error('❌ Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create payment order. Please try again.',
      },
      { status: 500 }
    );
  }
}