// lib/schemas/SpeakableSchema.tsx

interface SpeakableSchemaProps {
  cssSelector?: string[];
}

export function SpeakableSchema({
  cssSelector = ['.bluf', '.faq-a'],
}: SpeakableSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Migration Service Page',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}