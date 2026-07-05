"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname } from "@/i18n/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";

const locales = [
  { value: "en", labelKey: "english" as const },
  { value: "ar", labelKey: "arabic" as const },
];

export function LanguageSwitcher(): React.JSX.Element {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Select
      value={locale}
      onValueChange={(nextLocale) => {
        if (nextLocale === locale) return;
        window.location.assign(`/${nextLocale}${pathname}`);
      }}
    >
      <SelectTrigger
        className="h-9 w-[7.5rem] border-neutral-200 bg-transparent"
        aria-label={t("language")}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {t(item.labelKey)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
