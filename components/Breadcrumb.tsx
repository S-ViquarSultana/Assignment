import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight size={16} className="text-gray-400 mx-1" />
              )}
              
              {isLast ? (
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href || '#'} 
                  className="text-sm font-medium text-gray-500 hover:text-purple-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;