import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
  try {
    console.log('========== CREATE ORDER API HIT ==========');

    const body = await request.json();
    console.log('Request Body:', body);

    const { amount, currency = 'INR', receipt } = body;

    console.log('Amount Received:', amount);
    console.log('Currency:', currency);
    console.log('Receipt:', receipt);

    // Convert rupees to paise
    const amountInPaise = Math.round(amount * 100);

    console.log('Amount In Paise:', amountInPaise);

    if (amountInPaise < 100) {
      console.log('Validation Failed: Amount less than ₹1');

      return NextResponse.json(
        { error: 'Minimum amount is 100 paise (₹1)' },
        { status: 400 }
      );
    }

    console.log('RAZORPAY_KEY_ID Exists:', !!process.env.RAZORPAY_KEY_ID);
    console.log(
      'RAZORPAY_KEY_SECRET Exists:',
      !!process.env.RAZORPAY_KEY_SECRET
    );

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    console.log('Razorpay Instance Created');

    const options = {
      amount: amountInPaise,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    console.log('Order Options:', options);

    const order = await razorpay.orders.create(options);

    console.log('Order Created Successfully');
    console.log('Order Response:', order);

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error: any) {
    console.error('========== ORDER CREATION ERROR ==========');
    console.error('Full Error:', error);
    console.error('Message:', error?.message);
    console.error('Status Code:', error?.statusCode);
    console.error('Error Description:', error?.description);
    console.error('Stack:', error?.stack);

    if (error.statusCode === 401) {
      return NextResponse.json(
        {
          error: 'Authentication failed. Please check your API keys.',
          details: error.message,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to create order',
        details: error?.message,
      },
      { status: 500 }
    );
  }
}