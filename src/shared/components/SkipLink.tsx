"use client";

import { useTranslations } from "next-intl";

export function SkipLink(): React.JSX.Element {
  const t = useTranslations("common");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-elevation2"
    >
      {t("skipToContent")}
    </a>
  );
}
