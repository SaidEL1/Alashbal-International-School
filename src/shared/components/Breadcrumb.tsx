import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps): React.JSX.Element {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={`${item.label}-${index}`}>
              <li className="inline-flex items-center">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="text-foreground">
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden className="inline-flex items-center">
                  <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
