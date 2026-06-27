'use client';

import React, { useState, useEffect } from 'react';

declare global {
      interface Window {
            Razorpay: any;
      }
}

const PaymentPage = () => {
      const [loading, setLoading] = useState(false);

      // Load Razorpay script
      useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                  document.body.removeChild(script);
            };
      }, []);

      const handlePayment = async () => {
            setLoading(true);

            try {
                  // Check if Razorpay is loaded
                  if (!window.Razorpay) {
                        throw new Error('Payment gateway not loaded. Please refresh the page.');
                  }

                  // Step 1: Create order
                  const response = await fetch('/api/create-order', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              amount: 100, // ₹1 for testing (minimum amount)
                              currency: 'INR',
                              receipt: `receipt_${Date.now()}`,
                        }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                        throw new Error(data.error || 'Failed to create order');
                  }

                  // Step 2: Open Razorpay checkout
                  const options = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                        amount: data.amount,
                        currency: data.currency,
                        name: 'GHL ScaleUp',
                        description: 'Payment for Services',
                        order_id: data.order_id,
                        prefill: {
                              name: '',
                              email: '',
                              contact: '',
                        },
                        theme: {
                              color: '#F8D000',
                        },
                        modal: {
                              ondismiss: function () {
                                    setLoading(false);
                              },
                        },
                        handler: function (response: any) {
                              // Step 3: Verify payment
                              verifyPayment(response);
                        },
                  };

                  console.log(
                        "Frontend Razorpay Key:",
                        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
                  );
                  const razorpay = new window.Razorpay(options);
                  razorpay.open();

                  razorpay.on('payment.failed', function (response: any) {
                        console.log('========== PAYMENT FAILED ==========');
                        console.log('Full Response:', response);
                        console.log('Error:', response.error);
                        console.log('Code:', response.error?.code);
                        console.log('Description:', response.error?.description);
                        console.log('Reason:', response.error?.reason);
                        console.log('Source:', response.error?.source);
                        console.log('Step:', response.error?.step);
                        console.log('Metadata:', response.error?.metadata);

                        setLoading(false);
                  });

            } catch (error: any) {
                  console.error('Payment error:', error);
                  setLoading(false);
            }
      };

      const verifyPayment = async (paymentData: any) => {
            try {
                  const response = await fetch('/api/verify-payment', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              razorpay_order_id: paymentData.razorpay_order_id,
                              razorpay_payment_id: paymentData.razorpay_payment_id,
                              razorpay_signature: paymentData.razorpay_signature,
                        }),
                  });

                  const result = await response.json();

                  if (result.success) {
                        // Redirect to success page
                        window.location.href = '/payment-success';
                  } else {
                        console.error('Payment verification failed:', result.error);
                  }
            } catch (error: any) {
                  console.error('Verification error:', error);
            } finally {
                  setLoading(false);
            }
      };

      return (
            <div className="min-h-screen bg-gradient-to-b from-[#1C2E4A] to-[#111E30] flex items-center justify-center">
                  {/* Only the button - nothing else */}
                  <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="bg-[#F8D000] text-[#0B1421] px-12 py-4 rounded-lg text-base font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                        {loading ? (
                              <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-[#0B1421]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                              </span>
                        ) : (
                              'Pay Now'
                        )}
                  </button>
            </div>
      );
};

export default PaymentPage;