import { getTranslations } from "next-intl/server";

import { footerColumns } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { SchoolLogo } from "@/shared/components/SchoolLogo";

export async function Footer(): Promise<React.JSX.Element> {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-container px-4 py-12">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SchoolLogo showLink={false} imageClassName="h-14" />
          <div className="text-sm text-muted-foreground">
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.titleKey}>
              <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-900 dark:text-neutral-50">
                {t(column.titleKey)}
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground">
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t("footer.rights")}
          </p>
          <p>{t("footer.address")}</p>
        </div>
      </div>
    </footer>
  );
}
