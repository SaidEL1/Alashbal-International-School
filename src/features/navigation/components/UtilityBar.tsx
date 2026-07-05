"use client";

import { useTranslations } from "next-intl";

import { utilityLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";

export function UtilityBar(): React.JSX.Element {
  const t = useTranslations();

  return (
    <div className="hidden border-b border-neutral-200 bg-neutral-50 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 lg:block">
      <div className="mx-auto flex h-9 max-w-container items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-700">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary-700">
            {siteConfig.phone}
          </a>
        </div>
        <nav aria-label="Utility" className="flex items-center gap-4">
          {utilityLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary-700">
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
