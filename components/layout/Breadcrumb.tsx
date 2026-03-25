// components/layout/Breadcrumb.tsx
import Link from 'next/link';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="bg-[#F4F7FA] py-3.5 border-b border-[#E8EDF4]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-[0.75rem] text-[#8A9BB0] flex-wrap">
          <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition-colors">
            Home
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[#E8EDF4]">›</span>
              {item.href ? (
                <Link href={item.href} className="text-[#0E9BF0] hover:text-[#1C2E4A] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#8A9BB0]">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;