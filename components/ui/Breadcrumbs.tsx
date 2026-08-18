import { ChevronRight, Home } from 'lucide-react';
import { LocalizedLink } from './LocalizedLink';
import { useTranslation } from 'react-i18next';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const { t } = useTranslation();

  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <ol className="flex items-center space-x-2 text-sm text-fg/60 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <li>
          <LocalizedLink to="/" className="hover:text-accent transition-colors flex items-center">
            <Home className="w-4 h-4" />
            <span className="sr-only">{t('nav.home', 'Home')}</span>
          </LocalizedLink>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-border" />
            {item.href ? (
              <LocalizedLink
                to={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </LocalizedLink>
            ) : (
              <span className="text-fg font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
