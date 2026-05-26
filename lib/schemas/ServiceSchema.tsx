// lib/schemas/ServiceSchema.tsx

interface ServiceSchemaProps {
  name: string;
  description: string;
  url?: string;
  serviceType?: string[];
  areaServed?: string[];
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType = ['CRM Migration', 'GoHighLevel Configuration', 'Marketing Automation Setup'],
  areaServed = ['US', 'GB', 'AU', 'AE', 'CA', 'SG', 'IN'],
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'GHL Scale Up',
      url: 'https://www.ghlscaleup.com',
    },
    areaServed,
    serviceType,
    ...(url && { url }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}