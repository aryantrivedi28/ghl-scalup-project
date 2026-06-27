'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface RazorpayPaymentProps {
      amount: number;
      currency?: string;
      buttonText?: string;
      className?: string;
      onSuccess?: (data: PaymentSuccessData) => void;
      onError?: (error: PaymentError) => void;
      onDismiss?: () => void;
}

interface PaymentSuccessData {
      payment_id: string;
      order_id: string;
      signature: string;
}

interface PaymentError {
      code: string;
      description: string;
      source: string;
      step: string;
      reason: string;
      metadata?: any;
}

declare global {
      interface Window {
            Razorpay: any;
      }
}

const RazorpayPayment: React.FC<RazorpayPaymentProps> = ({
      amount,
      currency = 'INR',
      buttonText = 'Pay Now',
      className = '',
      onSuccess = (data) => console.log('Payment success:', data),
      onError = (error) => console.log('Payment error:', error),
      onDismiss = () => console.log('Payment dismissed'),
}) => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [isScriptLoaded, setIsScriptLoaded] = useState(false);

      // Load Razorpay script
      useEffect(() => {
            let isMounted = true;

            const loadScript = () => {
                  // Check if script already exists
                  if (window.Razorpay) {
                        setIsScriptLoaded(true);
                        return;
                  }

                  const script = document.createElement('script');
                  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                  script.async = true;

                  script.onload = () => {
                        if (isMounted) {
                              setIsScriptLoaded(true);
                        }
                  };

                  script.onerror = () => {
                        if (isMounted) {
                              setError('Failed to load payment gateway. Please refresh the page.');
                        }
                  };

                  document.body.appendChild(script);
            };

            loadScript();

            return () => {
                  isMounted = false;
            };
      }, []);

      // Handle payment
      const handlePayment = useCallback(async () => {
            // Clear previous errors
            setError(null);
            setLoading(true);

            try {
                  // Check if Razorpay is loaded
                  if (!window.Razorpay) {
                        throw new Error('Payment gateway is not loaded. Please refresh the page.');
                  }

                  // Validate amount
                  if (amount < 1) {
                        throw new Error('Minimum payment amount is ₹1');
                  }

                  // Step 1: Create order
                  const response = await fetch('/api/create-order', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              amount,
                              currency,
                              receipt: `receipt_${Date.now()}`,
                        }),
                  });

                  const data = await response.json();

                  if (!response.ok || !data.success) {
                        throw new Error(data.error || 'Failed to create payment order');
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
                                    onDismiss();
                              },
                        },
                        handler: function (response: any) {
                              // Step 3: Verify payment
                              verifyPayment({
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_signature: response.razorpay_signature,
                              });
                        },
                  };

                  const razorpay = new window.Razorpay(options);
                  razorpay.open();

                  // Handle payment failure
                  razorpay.on('payment.failed', function (response: any) {
                        const errorDetails = response.error;
                        setLoading(false);

                        const paymentError: PaymentError = {
                              code: errorDetails.code || 'PAYMENT_FAILED',
                              description: errorDetails.description || 'Payment failed',
                              source: errorDetails.source || 'razorpay',
                              step: errorDetails.step || 'payment',
                              reason: errorDetails.reason || 'Unknown error',
                              metadata: errorDetails.metadata,
                        };

                        onError(paymentError);
                  });

            } catch (error: any) {
                  console.error('Payment error:', error);
                  setError(error.message || 'Something went wrong');
                  setLoading(false);

                  onError({
                        code: 'CLIENT_ERROR',
                        description: error.message || 'Payment initiation failed',
                        source: 'client',
                        step: 'initiation',
                        reason: error.message || 'Unknown error',
                  });
            }
      }, [amount, currency, onDismiss, onError]);

      // Verify payment
      const verifyPayment = useCallback(async (paymentData: any) => {
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
                        // Payment verified successfully
                        onSuccess({
                              payment_id: result.payment_id,
                              order_id: result.order_id,
                              signature: paymentData.razorpay_signature,
                        });
                  } else {
                        // Verification failed
                        throw new Error(result.error || 'Payment verification failed');
                  }
            } catch (error: any) {
                  console.error('Verification error:', error);
                  setError(error.message || 'Payment verification failed');

                  onError({
                        code: 'VERIFICATION_FAILED',
                        description: error.message || 'Payment verification failed',
                        source: 'server',
                        step: 'verification',
                        reason: error.message || 'Unknown error',
                  });
            } finally {
                  setLoading(false);
            }
      }, [onSuccess, onError]);

      return (
            <div className="w-full">
                  <button
                        onClick={handlePayment}
                        disabled={loading || !isScriptLoaded}
                        className={`bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 w-full ${className}`}
                  >
                        {loading ? (
                              <span className="flex items-center justify-center gap-2">
                                    <svg
                                          className="animate-spin h-5 w-5 text-[#0B1421]"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                    >
                                          <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                          />
                                          <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                          />
                                    </svg>
                                    Processing...
                              </span>
                        ) : (
                              buttonText
                        )}
                  </button>

                  {error && (
                        <div className="mt-4 p-4 rounded-lg text-sm bg-red-500/10 border border-red-500/20 text-red-400">
                              ❌ {error}
                        </div>
                  )}

                  {/* Only show test card info in development */}
                  {process.env.NODE_ENV === 'development' && (
                        <div className="mt-4 p-3 bg-[rgba(248,208,0,0.03)] border border-[rgba(248,208,0,0.05)] rounded-lg">
                              <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">💳 Indian Test Cards</p>
                              <div className="flex flex-wrap justify-center gap-2 text-white/20 text-[10px] font-mono">
                                    <span>Visa: 4111 1111 1111 1111</span>
                                    <span>Master: 5267 0000 0000 0000</span>
                                    <span>RuPay: 5081 0000 0000 0000</span>
                              </div>
                              <div className="flex justify-center gap-4 text-white/20 text-[10px] font-mono mt-1">
                                    <span>Expiry: 12/25</span>
                                    <span>CVV: 123</span>
                                    <span>OTP: 1234</span>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default RazorpayPayment;