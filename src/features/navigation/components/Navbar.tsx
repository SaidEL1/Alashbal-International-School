"use client";

import { useTranslations } from "next-intl";

import { DarkModeToggle } from "@/shared/components/DarkModeToggle";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
import { SiteLogo } from "@/shared/components/SiteLogo";
import { Button } from "@/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps): React.JSX.Element {
  const t = useTranslations();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-4 px-4 lg:h-[72px]">
        <div className="flex items-center gap-3">
          <MobileDrawer />
          <SiteLogo className="hidden sm:flex" />
          <SiteLogo className="sm:hidden" showText={false} />
        </div>

        <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
          <MegaMenu />
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <DarkModeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/admissions/book-a-tour">{t("common.bookTour")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
