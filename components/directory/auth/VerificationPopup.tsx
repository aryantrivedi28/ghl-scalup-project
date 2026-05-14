// components/auth/VerificationPopup.tsx
'use client';

import { useState } from 'react';
import { X, User, Mail, Phone, AlertCircle } from 'lucide-react';

interface VerificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSendOTP: (name: string, email: string, phone: string) => Promise<boolean>;
  onVerifyOTP: (email: string, otp: string) => Promise<boolean>;
  isLoading: boolean;
  title?: string;
  description?: string;
}

export default function VerificationPopup({
  isOpen,
  onClose,
  onSuccess,
  onSendOTP,
  onVerifyOTP,
  isLoading,
  title = "Verify Your Identity",
  description = "Please verify to continue"
}: VerificationPopupProps) {
  const [step, setStep] = useState<'info' | 'otp'>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOTP = async () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please enter a valid mobile number');
      return;
    }
    
    setError('');
    setLoading(true);
    const success = await onSendOTP(formData.name, formData.email, formData.phone);
    setLoading(false);
    
    if (success) {
      setStep('otp');
    } else {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      setError('Please enter complete 6-digit OTP');
      return;
    }
    
    setError('');
    setLoading(true);
    const success = await onVerifyOTP(formData.email, enteredOtp);
    setLoading(false);
    
    if (success) {
      onSuccess();
      onClose();
    } else {
      setError('Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-5">
          {step === 'info' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20"
                  />
                </div>
              </div>
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
              <button
                onClick={handleSendOTP}
                disabled={loading || isLoading}
                className="w-full bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Verification OTP →'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Enter the 6-digit OTP sent to</p>
                <p className="font-semibold text-gray-900">{formData.email}</p>
              </div>
              <div className="flex justify-center gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-200 rounded-xl focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20"
                  />
                ))}
              </div>
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                  {error}
                </div>
              )}
              <button
                onClick={handleVerifyOTP}
                disabled={loading || isLoading}
                className="w-full bg-[#F8D000] hover:bg-[#FFE44D] text-gray-900 font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify & Continue →'}
              </button>
              <button
                onClick={() => setStep('info')}
                className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
              >
                ← Change details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}