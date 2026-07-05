"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { megaMenuItems, mobileExtraLinks, topLevelLinks, type NavItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { SchoolLogo } from "@/shared/components/SchoolLogo";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

function MobileNavSection({ item }: { item: NavItem }): React.JSX.Element {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-start text-base font-medium"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {t(item.labelKey)}
        <span
          aria-hidden
          className={cn("transition-transform", open && "rotate-90 rtl:-rotate-90")}
        >
          ▸
        </span>
      </button>
      {open && (
        <ul className="space-y-2 pb-3 ps-4">
          {item.columns?.flatMap((column) =>
            column.items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            )),
          )}
        </ul>
      )}
    </div>
  );
}

export function MobileDrawer(): React.JSX.Element {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={t("common.openMenu")}
        >
          <Menu className="h-6 w-6" aria-hidden />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-y-0 end-0 z-50 flex w-full max-w-sm flex-col bg-background shadow-elevation4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <Dialog.Title asChild>
              <SchoolLogo showLink={false} />
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button type="button" variant="ghost" size="icon" aria-label={t("common.closeMenu")}>
                <X className="h-5 w-5" aria-hidden />
              </Button>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            <div className="py-4">
              <Button asChild className="w-full">
                <Link href="/admissions/book-a-tour">{t("common.bookTour")}</Link>
              </Button>
            </div>

            <nav aria-label="Mobile">
              {megaMenuItems.map((item) => (
                <MobileNavSection key={item.labelKey} item={item} />
              ))}
              {topLevelLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-border py-3 text-base font-medium"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              {mobileExtraLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-border py-3 text-base font-medium"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-border p-4 text-sm text-muted-foreground">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
