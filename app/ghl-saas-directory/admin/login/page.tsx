// app/ghl-saas-directory/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, Shield, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate phone number (Indian format for now)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number');
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual API call to send OTP
      console.log('Sending OTP to:', phoneNumber);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStep('otp');
      setCountdown(60);
      
      // Start countdown timer
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual API call to verify OTP
      console.log('Verifying OTP:', otp);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock verification - in real implementation, OTP would be "123456" for testing
      if (otp === '123456') {
        // Set session (12 hours expiry)
        const expiryTime = Date.now() + (12 * 60 * 60 * 1000);
        localStorage.setItem('admin_session', JSON.stringify({
          phone: phoneNumber,
          expiresAt: expiryTime,
          isAuthenticated: true
        }));
        
        router.push('/ghl-saas-directory/admin');
      } else {
        setError('Invalid OTP. Please try again.');
      }
      
    } catch (err) {
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    if (countdown > 0) return;
    
    setLoading(true);
    // TODO: Resend OTP API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setCountdown(60);
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-blue to-space-deep flex items-center justify-center py-12">
      <Container size="sm">
        <Card className="border-0 shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-nurture-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-nurture-blue" />
            </div>
            <CardTitle className="text-2xl text-space-blue">
              Admin Access
            </CardTitle>
            <CardDescription>
              {step === 'phone' 
                ? 'Enter your registered mobile number to receive a login OTP'
                : `Enter the 6-digit OTP sent to +91 ${phoneNumber}`
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {step === 'phone' ? (
              <form onSubmit={handleSendOTP} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-space-blue mb-1.5">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-mid-gray">
                      +91
                    </div>
                    <Input
                      type="tel"
                      placeholder="98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="pl-12"
                      autoFocus
                      disabled={loading}
                    />
                  </div>
                  <p className="text-mid-gray text-xs mt-1">
                    Enter the mobile number registered with admin access
                  </p>
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={loading}
                >
                  Send OTP
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-space-blue mb-1.5">
                    Enter OTP
                  </label>
                  <Input
                    type="text"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="text-center text-2xl tracking-widest"
                    autoFocus
                    disabled={loading}
                  />
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'verifying...' : 'Login'}
                  <Shield className="w-4 h-4" />
                </Button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={resendOTP}
                    disabled={countdown > 0 || loading}
                    className="text-sm text-nurture-blue hover:text-nurture-blue/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {countdown > 0 ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
                  </button>
                </div>
                
                <button
                  type="button"
                  onClick={() => {
                    setStep('phone');
                    setOtp('');
                    setError('');
                  }}
                  className="w-full text-center text-sm text-mid-gray hover:text-dark-gray transition-colors mt-2"
                >
                  ← Back to phone number
                </button>
              </form>
            )}
            
            <div className="mt-6 pt-4 border-t border-light-gray text-center">
              <p className="text-mid-gray text-xs">
                <span className="font-semibold">Demo Access:</span> Use OTP <strong className="text-nurture-blue">123456</strong> for testing
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}