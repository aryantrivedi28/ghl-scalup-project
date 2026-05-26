// lib/schemas/OrganizationSchema.tsx

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  foundingDate?: string;
  founderName?: string;
  telephone?: string;
  areaServed?: string[];
  sameAs?: string[];
}

export function OrganizationSchema({
  name = 'GHL Scale Up',
  url = 'https://www.ghlscaleup.com',
  logo = 'https://www.ghlscaleup.com/ghlscalup.png',
  foundingDate = '2020',
  founderName = 'Aryan Trivedi',
  telephone = '+91-98932-70210',
  areaServed = ['US', 'GB', 'AU', 'AE', 'CA', 'SG', 'IN'],
  sameAs = ['https://www.linkedin.com/company/ghlscaleup'],
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    foundingDate,
    founder: { '@type': 'Person', name: founderName },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    areaServed,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}