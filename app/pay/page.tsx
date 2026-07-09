'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import RazorpayPayment from '@/components/razorpay/RazorpayPayment';

// Separate component that uses useSearchParams
function PaymentContent() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState<number>(99);
  const [planName, setPlanName] = useState<string>('');

  useEffect(() => {
    const amountParam = searchParams.get('amount');
    const planParam = searchParams.get('plan');
    
    if (amountParam) {
      const parsedAmount = parseInt(amountParam);
      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        setAmount(parsedAmount);
      }
    }
    
    if (planParam) {
      const formattedPlan = planParam
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
      setPlanName(formattedPlan);
    }
  }, [searchParams]);

  const handleSuccess = (data: any) => {
    console.log('Payment successful:', data);
    window.location.href = `/payment-success?payment_id=${data.payment_id}`;
  };

  const handleError = (error: any) => {
    console.error('Payment error:', error);
  };

  const handleDismiss = () => {
    console.log('Payment modal dismissed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2E4A] to-[#111E30] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#1C2E4A]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 text-center">
          {/* Logo or Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#F8D000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1v1m0 1v1m0 1v1" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m0 1v1" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Complete Payment
          </h1>
          
          <p className="text-white/60 text-sm mb-6">
            {planName ? `Pay for ${planName} Plan` : 'Secure payment via Razorpay'}
          </p>

          {/* Amount Display - USD */}
          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider">Amount (USD)</p>
            <p className="text-3xl font-bold text-white">${amount}</p>
          </div>

          {/* Razorpay Payment Button */}
          <RazorpayPayment
            amount={amount}
            currency="USD"
            buttonText={`Pay $${amount} Now`}
            className="max-w-xs mx-auto"
            onSuccess={handleSuccess}
            onError={handleError}
            onDismiss={handleDismiss}
          />
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-[#1C2E4A] to-[#111E30] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}