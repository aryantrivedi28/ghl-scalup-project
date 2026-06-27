// app/payment-success/PaymentSuccessContent.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');

  useEffect(() => {
    // Track successful payment
    console.log('Payment successful:', { paymentId });
  }, [paymentId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2E4A] to-[#111E30] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            className="w-10 h-10 text-green-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">
          Payment Successful! 🎉
        </h1>
        
        <p className="text-white/60 text-sm mb-8">
          Thank you for your payment. You will receive a confirmation email shortly.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#F8D000] text-[#0B1421] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessContent;