import { useEffect } from 'react';

interface FAQ {
  q: string;
  a: string;
}

export const useFaqSchema = (faqs: FAQ[]) => {
  useEffect(() => {
    // If no FAQs provided, don't add schema
    if (!faqs || faqs.length === 0) return;

    // Dynamically build schema with ANY number of FAQs
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    // Add schema to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Cleanup when page changes
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [faqs]); // Re-run if FAQs change
};