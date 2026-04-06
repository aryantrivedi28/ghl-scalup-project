// components/ContactForm.tsx
'use client';

import { useState } from 'react';

interface ContactFormProps {
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  successMessage?: string;
}

export default function ContactForm({
  variant = 'light',
  title = 'Get in Touch',
  subtitle = 'Fill out the form and our team will get back to you within 24 hours.',
  buttonText = 'Send Message →',
  successMessage = 'Thanks! We\'ll get back to you soon.'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate form data before sending
    if (!formData.name.trim()) {
      setError('Please enter your name');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your message');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  // For dark variant (on dark backgrounds)
  if (variant === 'dark') {
    if (isSuccess) {
      return (
        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
          <div className="text-3xl mb-2">✓</div>
          <p className="text-white font-medium">{successMessage}</p>
          <p className="text-white/40 text-xs mt-2">We'll get back to you within 24 hours.</p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="w-full">
        {title && (
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        )}
        {subtitle && (
          <p className="text-sm text-white/50 mb-5">{subtitle}</p>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#F8D000] focus:outline-none focus:ring-2 focus:ring-[#F8D000] focus:ring-opacity-50 text-white placeholder:text-white/30 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#F8D000] focus:outline-none focus:ring-2 focus:ring-[#F8D000] focus:ring-opacity-50 text-white placeholder:text-white/30 transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#F8D000] focus:outline-none focus:ring-2 focus:ring-[#F8D000] focus:ring-opacity-50 text-white placeholder:text-white/30 transition-all"
              placeholder="+1 234 567 8900"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1.5">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#F8D000] focus:outline-none focus:ring-2 focus:ring-[#F8D000] focus:ring-opacity-50 text-white placeholder:text-white/30 transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg font-semibold bg-[#F8D000] text-[#0B1421] hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                Sending...
              </span>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </form>
    );
  }

  // For light variant (on white/light backgrounds)
  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">✓</div>
        <p className="text-[#1C2E4A] font-medium">{successMessage}</p>
        <p className="text-[#4A5568] text-xs mt-2">We'll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {title && (
        <h3 className="text-xl font-bold text-[#1C2E4A] mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-sm text-[#8A9BB0] mb-5">{subtitle}</p>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8EDF4] focus:border-[#0E9BF0] focus:outline-none focus:ring-2 focus:ring-[#0E9BF0] focus:ring-opacity-50 text-[#1C2E4A] placeholder:text-[#8A9BB0] transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8EDF4] focus:border-[#0E9BF0] focus:outline-none focus:ring-2 focus:ring-[#0E9BF0] focus:ring-opacity-50 text-[#1C2E4A] placeholder:text-[#8A9BB0] transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8EDF4] focus:border-[#0E9BF0] focus:outline-none focus:ring-2 focus:ring-[#0E9BF0] focus:ring-opacity-50 text-[#1C2E4A] placeholder:text-[#8A9BB0] transition-all"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E8EDF4] focus:border-[#0E9BF0] focus:outline-none focus:ring-2 focus:ring-[#0E9BF0] focus:ring-opacity-50 text-[#1C2E4A] placeholder:text-[#8A9BB0] transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg font-semibold bg-[#0E9BF0] text-white hover:bg-[#0C88D4] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <LoadingSpinner />
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>
    </form>
  );
}