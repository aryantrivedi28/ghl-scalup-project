'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');

  useEffect(() => {
    // You can track successful payments here
    console.log('Payment successful with ID:', paymentId);
  }, [paymentId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2E4A] to-[#111E30] flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-[#1C2E4A]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Payment Successful! 🎉
        </h1>
        
        <p className="text-white/70 text-base mb-6">
          Thank you for choosing GHL ScaleUp. Your payment has been processed successfully.
        </p>

        {paymentId && (
          <div className="bg-white/5 rounded-lg p-4 mb-8">
            <p className="text-white/40 text-sm">Payment ID</p>
            <p className="text-[#F8D000] font-mono text-sm">{paymentId}</p>
          </div>
        )}

        <div className="bg-[rgba(248,208,0,0.05)] border border-[rgba(248,208,0,0.1)] rounded-lg p-4 mb-8">
          <p className="text-white/60 text-sm">
            📧 We've sent a confirmation email with your plan details.
            <br />
            Our team will contact you within 24 hours to get started.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-[#F8D000] text-[#0B1421] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/services"
            className="bg-transparent text-white px-6 py-3 rounded-lg text-sm font-medium border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;