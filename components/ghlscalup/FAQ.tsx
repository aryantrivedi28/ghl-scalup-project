'use client';

import { useState } from 'react';
import { faqData } from '@/data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search
  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#0B1421] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#0E9BF0] text-sm font-semibold uppercase tracking-wider mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got Questions? <span className="text-[#F8D000]">We've Got Answers.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about GoHighLevel and working with GHL Scale Up
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 bg-[#1C2E4A] border border-[#1E3A5F] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#0E9BF0] transition-colors"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1C2E4A]/50 border border-[#1E3A5F] rounded-xl overflow-hidden transition-all hover:border-[#0E9BF0]/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#1C2E4A] transition-colors cursor-pointer"
                  aria-expanded={openIndex === index}
                  aria-label={`Toggle answer for ${faq.question}`}
                >
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#F8D000] text-2xl flex-shrink-0 ml-4">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[1000px] pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed px-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No matching questions found.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-[#0E9BF0] hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 pt-6 border-t border-[#1E3A5F]">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-[#0E9BF0] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0878C4] transition-colors"
          >
            Contact Our Team →
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Or email us directly at <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}