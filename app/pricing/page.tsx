'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PricingPage = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      price: 99,
      description: 'Perfect for small agencies just getting started',
      features: [
        'GHL Account Setup',
        '1 Funnel Build',
        'Email Automation Setup',
        'Basic Support (24/7)',
        '1 Custom Integration',
      ],
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: 299,
      description: 'For growing agencies needing advanced features',
      features: [
        'Everything in Starter',
        '5 Funnel Builds',
        'Advanced Automation Workflows',
        'White-label SaaS Setup',
        'Priority Support',
        '10 Custom Integrations',
        'Monthly Strategy Call',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 799,
      description: 'Full-scale agency management and automation',
      features: [
        'Everything in Pro',
        'Unlimited Funnel Builds',
        'Custom AI Workflows',
        'Full White-label Setup',
        '24/7 Dedicated Support',
        'Unlimited Integrations',
        'Weekly Strategy Calls',
        'Custom Development',
        'Agency Training Program',
      ],
      popular: false,
    },
  ];

  const handlePlanSelect = (planId: string, price: number) => {
    setSelectedPlan(planId);
    router.push(`/pay?amount=${price}&plan=${planId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2E4A] to-[#111E30] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
            Pricing Plans
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-[#F8D000]">Growth Plan</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base">
            Select the perfect plan for your agency needs. All plans include expert GoHighLevel support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#1C2E4A]/50 backdrop-blur-sm border rounded-2xl p-6 lg:p-8 flex flex-col transition-all hover:-translate-y-1 ${
                plan.popular
                  ? 'border-[#F8D000] shadow-[0_0_30px_rgba(248,208,0,0.1)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#F8D000] text-[#0B1421] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block self-start mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-white/40 text-sm ml-2">/ month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-white/70 text-sm">
                    <svg className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Payment Button */}
              <button
                onClick={() => handlePlanSelect(plan.id, plan.price)}
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'bg-[#F8D000] text-[#0B1421] hover:bg-[#FFE44D]'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Get Started - ${plan.price}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            All plans include a 7-day free trial. No credit card required for trial.
          </p>
          <Link
            href="/contact-us"
            className="inline-block mt-4 text-[#F8D000] text-sm hover:underline transition-all"
          >
            Need a custom plan? Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;