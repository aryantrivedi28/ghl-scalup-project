// components/case-studies/PortableTextComponents.tsx
import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-3 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold text-[#1C2E4A] mb-3 mt-5">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold text-[#1C2E4A] mb-2 mt-4">{children}</h4>,
    normal: ({ children }) => <p className="text-[#4A5568] leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#F8D000] pl-5 italic text-[#4A5568] my-5 py-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-[#4A5568]">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-[#4A5568]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[#4A5568]">{children}</li>,
    number: ({ children }) => <li className="text-[#4A5568]">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Case study image'}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#1C2E4A]">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#4A5568]">{children}</em>,
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">
        {children}
      </a>
    ),
  },
};