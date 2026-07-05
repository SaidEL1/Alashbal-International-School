"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";

const CONSENT_KEY = "ais-cookie-consent";

export function CookieBanner(): React.JSX.Element | null {
  const t = useTranslations("common");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  function accept(): void {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("acceptCookies")}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 shadow-elevation3 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-container flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {t("cookieMessage")}{" "}
          <Link
            href="/privacy"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t("learnMore")}
          </Link>
        </p>
        <Button type="button" onClick={accept} className="shrink-0">
          {t("acceptCookies")}
        </Button>
      </div>
    </div>
  );
}
