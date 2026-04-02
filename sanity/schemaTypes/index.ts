// sanity/schemas/index.ts
import caseStudy from './caseStudy';

// Make sure caseStudy is exported correctly
export const schemaTypes = [caseStudy];

// Debug: Log to confirm schema is loaded
console.log('Loaded schemas:', schemaTypes.map(s => s.name));