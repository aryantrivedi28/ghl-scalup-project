'use client';

import { useEffect } from 'react';
import { faqData } from '@/data/faqData';

export default function FAQSchema() {
  useEffect(() => {
    // Create the FAQ schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove existing schema if any
    const existingScript = document.getElementById('faq-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and add the script tag
    const script = document.createElement('script');
    script.id = 'faq-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      const scriptToRemove = document.getElementById('faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}